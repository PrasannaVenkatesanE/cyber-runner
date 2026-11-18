/**
 * Game Scene
 * Main gameplay scene with player, items, and game logic
 */

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Get screen dimensions first
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Register gameBridge if available
        if (window.gameBridge) {
            window.gameBridge.setPhaserGame(this.scene.game || this.game);
        }

        // Game state
        this.score = 0;
        this.distance = 0;
        this.risk = 0;
        this.combo = 0;
        this.isPaused = false;
        this.isGameOver = false;

        // Clear any existing graphics
        this.children.removeAll();

        // Background - full screen
        this.background = this.add.rectangle(width / 2, height / 2, width, height, 0x0a0a2e);

        // Draw lanes
        this.drawLanes();

        // Initialize flag to prevent update() from running before everything is ready
        this.isInitialized = false;

        // Create player - ensure Player class is available
        const PlayerClass = window.Player || (typeof Player !== 'undefined' ? Player : null);
        if (!PlayerClass) {
            console.error('Player class not found. Available classes:', Object.keys(window).filter(k => k.includes('Player')));
            console.error('window.Player:', window.Player);
            console.error('typeof Player:', typeof Player);
            this.isInitialized = false;
            return;
        }

        try {
            const playerStartY = height - 100;
            const playerStartX = width / 2;
            this.player = new PlayerClass(this, playerStartX, playerStartY);
            console.log('Player created successfully:', this.player);
        } catch (error) {
            console.error('Failed to create player:', error);
            this.isInitialized = false;
            return;
        }

        // Create item spawner
        const ItemSpawnerClass = window.ItemSpawner || (typeof ItemSpawner !== 'undefined' ? ItemSpawner : null);
        if (!ItemSpawnerClass) {
            console.error('ItemSpawner class not found');
            console.error('window.ItemSpawner:', window.ItemSpawner);
            console.error('typeof ItemSpawner:', typeof ItemSpawner);
            this.isInitialized = false;
            return;
        }

        try {
            this.spawner = new ItemSpawnerClass(this, this.player);
            console.log('Spawner created successfully:', this.spawner);
        } catch (error) {
            console.error('Failed to create spawner:', error);
            this.isInitialized = false;
            return;
        }

        // Mark as initialized only if everything succeeded
        this.isInitialized = true;

        // Create UI (React handles HUD now, but keep for compatibility)
        const GameUIClass = window.GameUI || (typeof GameUI !== 'undefined' ? GameUI : null);
        if (GameUIClass) {
            this.ui = new GameUIClass(this);
        }

        // Create learning report tracker
        const LearningReportClass = window.LearningReport || (typeof LearningReport !== 'undefined' ? LearningReport : null);
        if (!LearningReportClass) {
            console.error('LearningReport class not found');
            return;
        }
        this.report = new LearningReportClass();

        // Parallax background layers
        this.createBackground();

        // Ensure canvas is visible and properly positioned
        const game = this.sys.game || this.game;
        if (game && game.canvas) {
            const canvas = game.canvas;
            canvas.style.display = 'block';
            canvas.style.position = 'absolute';
            canvas.style.zIndex = '1';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
        }

        // Set camera to fill screen
        this.cameras.main.setViewport(0, 0, width, height);

        console.log('GameScene created successfully - Dimensions:', width, 'x', height);

        // Pause controls
        this.pauseKey = this.input.keyboard.addKey('P');
        this.pauseKey.on('down', () => {
            this.togglePause();
        });

        // Also allow ESC and SPACE for pause (SPACE works when not jumping)
        this.input.keyboard.on('keydown-ESC', () => {
            this.togglePause();
        });

        // SPACE can pause when not jumping (will override jump in paused state)
        this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.spaceKey.on('down', () => {
            if (this.isPaused) {
                this.togglePause();
            }
        });
    }

    drawLanes() {
        const lanePositions = [200, 400, 600];
        const laneColor = 0x1a1a3e;
        const laneAlpha = 0.3;

        lanePositions.forEach(x => {
            // Lane markers
            const laneLine = this.add.rectangle(x, 300, 2, 600, laneColor, laneAlpha);

            // Lane numbers for visual reference (optional, can be removed)
        });
    }

    createBackground() {
        // Create scrolling background layers for parallax effect
        this.bgLayers = [];

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Layer 1: Grid pattern (slowest)
        this.bgLayer1 = this.add.graphics();
        this.bgLayer1.lineStyle(1, 0x1a1a5e, 0.3);
        for (let y = 0; y < height; y += 50) {
            this.bgLayer1.moveTo(0, y);
            this.bgLayer1.lineTo(width, y);
        }
        for (let x = 0; x < width; x += 50) {
            this.bgLayer1.moveTo(x, 0);
            this.bgLayer1.lineTo(x, height);
        }
        this.bgLayer1.strokePath();

        // Layer 2: Moving elements (faster)
        this.bgLayer2 = [];
        for (let i = 0; i < 20; i++) {
            const dot = this.add.circle(
                Phaser.Math.Between(0, width),
                Phaser.Math.Between(0, height),
                2,
                0x00ffff,
                0.2
            );
            this.bgLayer2.push(dot);
        }
    }

    update(time, delta) {
        // Don't update if not initialized, paused, or game over
        if (!this.isInitialized || this.isPaused || this.isGameOver) {
            return;
        }

        // Double-check player and spawner exist
        if (!this.player || !this.spawner) {
            console.error('Player or spawner not initialized, stopping update loop');
            this.isInitialized = false;
            return;
        }

        // Update distance (based on spawner speed)
        const speed = this.spawner.getSpeed();
        this.distance += (speed * delta) / 1000;

        // Update parallax background
        this.updateBackground(delta);

        // Update player
        if (this.player && this.player.update) {
            this.player.update(time, delta);
        }

        // Update spawner
        if (this.spawner && this.spawner.update) {
            this.spawner.update(time, delta, this.distance);
        }

        // Check collisions
        this.checkCollisions();

        // Emit game data to React for HUD updates
        if (window.gameBridge) {
            window.gameBridge.emitToReact('gameData', {
                score: this.score,
                distance: this.distance,
                risk: this.risk,
                combo: this.combo
            });
        }

        // Check game over conditions
        if (this.risk >= 100) {
            this.gameOver('Risk reached 100%!');
        }
    }

    updateBackground(delta) {
        // Scroll grid pattern
        const scrollSpeed = this.spawner.getSpeed() * 0.1;
        const height = this.cameras.main.height;
        const width = this.cameras.main.width;

        if (this.bgLayer1) {
            this.bgLayer1.y += (scrollSpeed * delta) / 1000;
            if (this.bgLayer1.y > 50) {
                this.bgLayer1.y = 0;
            }
        }

        // Move background dots
        if (this.bgLayer2 && this.bgLayer2.length > 0) {
            this.bgLayer2.forEach(dot => {
                dot.y += (scrollSpeed * 2 * delta) / 1000;
                if (dot.y > height) {
                    dot.y = -50;
                    dot.x = Phaser.Math.Between(0, width);
                }
            });
        }
    }

    checkCollisions() {
        const playerBox = this.player.getCollisionBox();
        const activeItems = this.spawner.getActiveItems();

        for (let i = activeItems.length - 1; i >= 0; i--) {
            const item = activeItems[i];
            // Updated collision box to match enlarged card size (105x105)
            const itemBox = {
                x: item.sprite.x - 52.5,
                y: item.y - 52.5,
                width: 105,
                height: 105
            };

            // Simple AABB collision detection
            if (this.isColliding(playerBox, itemBox)) {
                this.collectItem(item);
                this.spawner.removeItem(item);
            }
        }
    }

    isColliding(box1, box2) {
        return (
            box1.x < box2.x + box2.width &&
            box1.x + box1.width > box2.x &&
            box1.y < box2.y + box2.height &&
            box1.y + box1.height > box2.y
        );
    }

    collectItem(item) {
        const itemConfig = item.config;

        // Pause the game scene to show educational popup
        this.scene.pause();

        // Update score
        let scoreChange = itemConfig.scoreChange;

        // Apply combo multiplier for good items
        if (itemConfig.type === 'good' && this.combo > 1) {
            let multiplier = 1;
            if (this.combo >= 5) {
                multiplier = 2;
            } else if (this.combo >= 3) {
                multiplier = 1.5;
            }
            scoreChange = Math.floor(scoreChange * multiplier);
        }

        this.score += scoreChange;

        // Update risk
        this.risk += itemConfig.riskChange;
        this.risk = Math.max(0, Math.min(100, this.risk));

        // Update combo
        if (itemConfig.type === 'good') {
            this.combo++;
        } else {
            this.combo = 0; // Reset combo on bad item
        }

        // Record in report
        this.report.recordItem(itemConfig);

        // Emit to React to show educational popup
        if (window.gameBridge) {
            window.gameBridge.emitToReact('itemCollected', {
                item: itemConfig,
                score: this.score,
                risk: this.risk,
                combo: this.combo
            });
        }

        // Visual feedback
        this.flashScreen(itemConfig.type === 'good' ? 0x00ff00 : 0xff0000);

        // Listen for popup dismissal to resume game
        if (window.gameBridge) {
            const unsubscribe = window.gameBridge.onReactEvent('popupDismissed', () => {
                this.scene.resume();
                unsubscribe();
            });
        }
    }

    flashScreen(color) {
        const flash = this.add.rectangle(400, 300, 800, 600, color, 0.2);
        this.tweens.add({
            targets: flash,
            alpha: 0,
            duration: 200,
            onComplete: () => {
                flash.destroy();
            }
        });
    }

    togglePause() {
        if (this.isGameOver) return;

        this.isPaused = !this.isPaused;

        if (this.isPaused) {
            this.ui.showPauseScreen();
        } else {
            this.ui.hidePauseScreen();
        }
    }

    gameOver(reason) {
        if (this.isGameOver) return;

        this.isGameOver = true;

        // Save game data to scene registry for GameOverScene
        this.registry.set('finalScore', this.score);
        this.registry.set('finalDistance', this.distance);
        this.registry.set('finalRisk', this.risk);
        this.registry.set('report', this.report);

        // Transition to game over scene
        this.time.delayedCall(1000, () => {
            this.scene.start('GameOverScene');
        });
    }

    shutdown() {
        // Cleanup
        if (this.player) this.player.destroy();
        if (this.spawner) this.spawner.clearAll();
        if (this.ui) this.ui.destroy();
    }
}

