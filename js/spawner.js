/**
 * Item Spawner
 * Handles spawning of cybersecurity items with difficulty scaling
 */

// Prevent duplicate class declaration
if (typeof ItemSpawner === 'undefined') {
    window.ItemSpawner = class ItemSpawner {
        constructor(scene, player) {
            this.scene = scene;
            this.player = player;

            // Calculate lane positions based on screen width
            const screenWidth = scene.cameras.main.width;
            const laneWidth = screenWidth / 3;
            this.laneWidth = laneWidth;
            this.lanePositions = [laneWidth / 2, screenWidth / 2, screenWidth - laneWidth / 2];

            // Spawning configuration
            this.baseSpawnRate = 1500; // milliseconds between spawns
            this.spawnTimer = 0;
            this.lastSpawnTime = 0;

            // Active items on screen
            this.activeItems = [];

            // Item scroll speed (constant - no speed scaling)
            this.baseSpeed = 200; // pixels per second
            this.currentSpeed = this.baseSpeed; // Constant speed

            // Distance tracking (for item variety only, not difficulty)
            this.distanceTraveled = 0;
        }

        /**
         * Get weighted random item based on distance (crypto items appear later)
         */
        getWeightedItem(distance) {
            const distanceKm = distance / 1000; // Convert to kilometers

            // Crypto items probability increases with distance
            let cryptoWeight = 0;
            if (distanceKm > 0.5) {
                cryptoWeight = 0.2; // 20% at 500m
            }
            if (distanceKm > 1) {
                cryptoWeight = 0.4; // 40% at 1km+
            }

            // Filter items by availability
            const items = window.CYBERSECURITY_ITEMS || (typeof CYBERSECURITY_ITEMS !== 'undefined' ? CYBERSECURITY_ITEMS : []);
            let availableItems = [...items];

            // Adjust weights based on distance
            const weights = availableItems.map(item => {
                if (item.category === 'Crypto') {
                    return cryptoWeight > 0 ? 1 : 0;
                }
                return 1;
            });

            // Remove crypto items if not far enough
            if (cryptoWeight === 0) {
                availableItems = availableItems.filter(item => item.category !== 'Crypto');
            }

            // Random selection
            const randomIndex = Math.floor(Math.random() * availableItems.length);
            return availableItems[randomIndex];
        }

        /**
         * Calculate spawn rate based on distance
         */
        calculateSpawnRate(distance) {
            const distanceKm = distance / 1000;
            // Spawn rate increases with distance (spawns more frequently)
            let rateMultiplier = 1;
            if (distanceKm > 0.2) {
                rateMultiplier = 0.9; // 10% faster
            }
            if (distanceKm > 0.5) {
                rateMultiplier = 0.8; // 20% faster
            }
            if (distanceKm > 1) {
                rateMultiplier = 0.7; // 30% faster
            }
            if (distanceKm > 2) {
                rateMultiplier = 0.6; // 40% faster
            }

            return this.baseSpawnRate * rateMultiplier;
        }

        /**
         * Update speed (constant - no scaling)
         */
        updateSpeed(distance) {
            // Speed remains constant - no increases
            this.currentSpeed = this.baseSpeed;
        }

        /**
         * Spawn an item at a specific lane
         */
        spawnItem(lane, distance) {
            if (lane < 0 || lane > 2) return null;

            const itemConfig = this.getWeightedItem(distance);
            const x = this.lanePositions[lane];
            const y = -50; // Start above screen

            // Determine colors based on item type
            const isGood = itemConfig.type === 'good';
            const primaryColor = isGood ? 0x00ff88 : 0xff4466;
            const secondaryColor = isGood ? 0x00cc66 : 0xcc2244;
            const glowColor = isGood ? 0x00ff00 : 0xff0000;
            const iconSymbol = isGood ? '✓' : '✗';

            // Create card container group for visual layering
            // Create outer glow effect - larger cards for better text fit
            const glowOuter = this.scene.add.rectangle(x, y, 115, 115, glowColor, 0.3);
            glowOuter.setStrokeStyle(0);

            // Create main card background with gradient-like effect
            const cardBg = this.scene.add.rectangle(x, y, 105, 105, secondaryColor);
            cardBg.setStrokeStyle(3, 0xffffff, 0.9);

            // Create inner highlight for depth
            const cardInner = this.scene.add.rectangle(x, y - 5, 95, 85, primaryColor);
            cardInner.setStrokeStyle(0);

            // Create icon badge at top
            const iconBg = this.scene.add.circle(x, y - 35, 14, isGood ? 0x00ff00 : 0xff0000);
            const iconText = this.scene.add.text(x, y - 35, iconSymbol, {
                fontSize: '16px',
                fontStyle: 'bold',
                color: '#ffffff',
                align: 'center',
                stroke: '#000000',
                strokeThickness: 2
            });
            iconText.setOrigin(0.5);

            // Add item name label - show full name with word wrap
            let labelText = itemConfig.name.toUpperCase();

            // Calculate font size based on text length - increased by 2px each tier
            let fontSize = '14px';
            if (labelText.length > 14) {
                fontSize = '11px';
            } else if (labelText.length > 10) {
                fontSize = '12px';
            } else if (labelText.length > 7) {
                fontSize = '13px';
            }

            const label = this.scene.add.text(x, y + 5, labelText, {
                fontSize: fontSize,
                fontStyle: 'bold',
                color: '#ffffff',
                align: 'center',
                stroke: '#000000',
                strokeThickness: 3,
                wordWrap: { width: 95, useAdvancedWrap: true },
                shadow: {
                    offsetX: 1,
                    offsetY: 1,
                    color: '#000000',
                    blur: 2,
                    fill: true
                }
            });
            label.setOrigin(0.5);

            // Add category sublabel - show full category
            let categoryText = itemConfig.category || '';

            const categoryLabel = this.scene.add.text(x, y + 38, categoryText, {
                fontSize: '11px',
                color: '#cccccc',
                align: 'center',
                stroke: '#000000',
                strokeThickness: 2
            });
            categoryLabel.setOrigin(0.5);

            // Store item data with all visual elements
            const item = {
                sprite: cardBg, // Main collision target
                glowOuter: glowOuter,
                cardInner: cardInner,
                iconBg: iconBg,
                iconText: iconText,
                label: label,
                categoryLabel: categoryLabel,
                config: itemConfig,
                lane: lane,
                y: y
            };

            this.activeItems.push(item);
            return item;
        }

        /**
         * Determine which lanes to spawn items in
         */
        getSpawnLanes() {
            // Randomly spawn 1-3 items (usually 1-2)
            const numItems = Math.random() < 0.7 ? 1 : (Math.random() < 0.9 ? 2 : 3);
            const lanes = [];

            // Randomly select lanes
            const availableLanes = [0, 1, 2];
            for (let i = 0; i < numItems && availableLanes.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * availableLanes.length);
                lanes.push(availableLanes.splice(randomIndex, 1)[0]);
            }

            return lanes;
        }

        /**
         * Update spawner - called every frame
         */
        update(time, delta, distance) {
            this.distanceTraveled = distance;
            this.updateSpeed(distance);

            // Update spawn timer
            this.spawnTimer += delta;
            const spawnRate = this.calculateSpawnRate(distance);

            // Spawn new items
            if (this.spawnTimer >= spawnRate) {
                this.spawnTimer = 0;
                const lanes = this.getSpawnLanes();
                lanes.forEach(lane => {
                    this.spawnItem(lane, distance);
                });
            }

            // Move active items downward
            const speedPixels = (this.currentSpeed * delta) / 1000;
            for (let i = this.activeItems.length - 1; i >= 0; i--) {
                const item = this.activeItems[i];
                item.y += speedPixels;

                // Update all visual elements' positions
                item.sprite.y = item.y;
                item.label.y = item.y + 5;
                if (item.glowOuter) item.glowOuter.y = item.y;
                if (item.cardInner) item.cardInner.y = item.y - 5;
                if (item.iconBg) item.iconBg.y = item.y - 35;
                if (item.iconText) item.iconText.y = item.y - 35;
                if (item.categoryLabel) item.categoryLabel.y = item.y + 38;

                // Remove items that are off screen
                const sceneHeight = this.scene.cameras.main ? this.scene.cameras.main.height : 600;
                if (item.y > sceneHeight + 100) {
                    this.destroyItemVisuals(item);
                    this.activeItems.splice(i, 1);
                }
            }
        }

        /**
         * Get all active items for collision detection
         */
        getActiveItems() {
            return this.activeItems;
        }

        /**
         * Remove an item (when collected)
         */
        removeItem(item) {
            const index = this.activeItems.indexOf(item);
            if (index > -1) {
                this.destroyItemVisuals(item);
                this.activeItems.splice(index, 1);
            }
        }

        /**
         * Destroy all visual elements of an item
         */
        destroyItemVisuals(item) {
            if (item.sprite) item.sprite.destroy();
            if (item.label) item.label.destroy();
            if (item.glowOuter) item.glowOuter.destroy();
            if (item.cardInner) item.cardInner.destroy();
            if (item.iconBg) item.iconBg.destroy();
            if (item.iconText) item.iconText.destroy();
            if (item.categoryLabel) item.categoryLabel.destroy();
        }

        /**
         * Clear all items
         */
        clearAll() {
            this.activeItems.forEach(item => {
                this.destroyItemVisuals(item);
            });
            this.activeItems = [];
        }

        /**
         * Get current speed
         */
        getSpeed() {
            return this.currentSpeed;
        }
    }
} // Close the if (typeof ItemSpawner === 'undefined') block
