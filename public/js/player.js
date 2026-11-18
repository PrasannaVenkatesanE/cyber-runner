/**
 * Player Controller
 * Handles player movement, animations, and state management
 * Updated: Smooth incremental movement with LEFT/RIGHT keys only
 */

// Prevent duplicate class declaration
if (typeof Player === 'undefined') {
    window.Player = class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        
        // Get screen dimensions
        const screenWidth = scene.cameras.main.width;
        const screenHeight = scene.cameras.main.height;
        
        // Movement configuration
        this.incrementalMoveDistance = 90; // Pixels to move on single tap
        this.continuousMoveSpeed = 600; // Pixels per second when holding key
        this.minX = 40; // Left boundary (half player width + padding)
        this.maxX = screenWidth - 40; // Right boundary
        
        // Player sprite properties
        this.sprite = scene.add.rectangle(x, y, 60, 100, 0x00aaff);
        this.sprite.setStrokeStyle(2, 0x00ddff);
        
        // Set initial position within boundaries
        this.sprite.x = Phaser.Math.Clamp(x, this.minX, this.maxX);
        
        // Base Y position (no jumping/sliding)
        this.baseY = y;
        this.currentY = this.baseY;
        
        // State - only running now
        this.state = 'running';
        
        // Movement tracking
        this.moveDirection = 0; // -1 = left, 0 = none, 1 = right
        this.lastKeyPressTime = { LEFT: 0, RIGHT: 0 };
        this.keyHoldThreshold = 150; // ms before considering it a hold
        
        // Collision bounds (static, no sliding)
        this.collisionWidth = 60;
        this.collisionHeight = 100;
        this.collisionY = this.currentY;
        
        // Controls - only LEFT and RIGHT arrow keys
        this.keys = scene.input.keyboard.addKeys('LEFT,RIGHT');
        
        // Track key press/release for single tap detection
        this.keys.LEFT.on('down', () => {
            const now = Date.now();
            const timeSinceLastPress = now - this.lastKeyPressTime.LEFT;
            
            // If pressed quickly after release, it's a single tap
            if (timeSinceLastPress < 300) {
                this.moveLeftIncrement();
            }
            this.lastKeyPressTime.LEFT = now;
        });
        
        this.keys.RIGHT.on('down', () => {
            const now = Date.now();
            const timeSinceLastPress = now - this.lastKeyPressTime.RIGHT;
            
            // If pressed quickly after release, it's a single tap
            if (timeSinceLastPress < 300) {
                this.moveRightIncrement();
            }
            this.lastKeyPressTime.RIGHT = now;
        });
        
        // Touch controls for mobile - simplified to horizontal only
        this.setupTouchControls();
    }
    
    setupTouchControls() {
        // Horizontal swipe/tap detection
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartTime = 0;
        
        this.scene.input.on('pointerdown', (pointer) => {
            touchStartX = pointer.x;
            touchStartTime = Date.now();
        });
        
        this.scene.input.on('pointerup', (pointer) => {
            touchEndX = pointer.x;
            const deltaX = touchEndX - touchStartX;
            const deltaTime = Date.now() - touchStartTime;
            const threshold = 50; // Minimum swipe distance
            
            // Horizontal movement only
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    // Swipe right
                    if (deltaTime < 300) {
                        // Quick swipe = incremental move
                        this.moveRightIncrement();
                    }
                } else {
                    // Swipe left
                    if (deltaTime < 300) {
                        // Quick swipe = incremental move
                        this.moveLeftIncrement();
                    }
                }
            } else if (Math.abs(deltaX) < 30 && deltaTime < 200) {
                // Tap - move based on which side of screen was tapped
                const screenWidth = this.scene.cameras.main.width;
                if (touchStartX < screenWidth / 2) {
                    this.moveLeftIncrement();
                } else {
                    this.moveRightIncrement();
                }
            }
        });
        
        // Track continuous touch movement
        let isTouching = false;
        let touchMoveX = 0;
        
        this.scene.input.on('pointerdown', () => {
            isTouching = true;
        });
        
        this.scene.input.on('pointerup', () => {
            isTouching = false;
        });
        
        this.scene.input.on('pointermove', (pointer) => {
            if (isTouching && pointer.isDown) {
                touchMoveX = pointer.x;
                // Continuous movement while dragging
                const currentX = this.sprite.x;
                const delta = touchMoveX - currentX;
                if (Math.abs(delta) > 5) {
                    const moveAmount = Math.sign(delta) * Math.min(Math.abs(delta), this.continuousMoveSpeed * (16 / 1000)); // ~16ms per frame
                    this.sprite.x = Phaser.Math.Clamp(currentX + moveAmount, this.minX, this.maxX);
                }
            }
        });
    }
    
    updateCollisionBounds() {
        // Simple static collision bounds
        this.collisionWidth = 60;
        this.collisionHeight = 100;
        this.collisionY = this.currentY;
    }
    
    handleInput(time, delta) {
        // Continuous movement while key is held
        const now = Date.now();
        let movingLeft = false;
        let movingRight = false;
        
        if (this.keys.LEFT.isDown) {
            const holdTime = now - this.lastKeyPressTime.LEFT;
            if (holdTime > this.keyHoldThreshold) {
                // Key is being held - continuous movement
                movingLeft = true;
            }
        }
        
        if (this.keys.RIGHT.isDown) {
            const holdTime = now - this.lastKeyPressTime.RIGHT;
            if (holdTime > this.keyHoldThreshold) {
                // Key is being held - continuous movement
                movingRight = true;
            }
        }
        
        // Apply continuous movement
        if (movingLeft && !movingRight) {
            const moveDistance = (this.continuousMoveSpeed * delta) / 1000;
            this.sprite.x = Phaser.Math.Clamp(this.sprite.x - moveDistance, this.minX, this.maxX);
        } else if (movingRight && !movingLeft) {
            const moveDistance = (this.continuousMoveSpeed * delta) / 1000;
            this.sprite.x = Phaser.Math.Clamp(this.sprite.x + moveDistance, this.minX, this.maxX);
        }
    }
    
    moveLeftIncrement() {
        // Single tap - move left by incremental amount
        const newX = this.sprite.x - this.incrementalMoveDistance;
        this.sprite.x = Phaser.Math.Clamp(newX, this.minX, this.maxX);
    }
    
    moveRightIncrement() {
        // Single tap - move right by incremental amount
        const newX = this.sprite.x + this.incrementalMoveDistance;
        this.sprite.x = Phaser.Math.Clamp(newX, this.minX, this.maxX);
    }
    
    update(time, delta) {
        // Handle input for continuous movement
        this.handleInput(time, delta);
        
        // Keep Y position fixed
        this.currentY = this.baseY;
        this.sprite.y = this.currentY;
        
        // Update collision bounds
        this.updateCollisionBounds();
    }
    
    getCollisionBox() {
        return {
            x: this.sprite.x - this.collisionWidth / 2,
            y: this.collisionY - this.collisionHeight / 2,
            width: this.collisionWidth,
            height: this.collisionHeight
        };
    }
    
    getX() {
        return this.sprite.x;
    }
    
    getY() {
        return this.collisionY;
    }
    
    getLane() {
        // For compatibility - calculate approximate lane based on X position
        const screenWidth = this.scene.cameras.main.width;
        const laneWidth = screenWidth / 3;
        if (this.sprite.x < laneWidth) return 0;
        if (this.sprite.x < laneWidth * 2) return 1;
        return 2;
    }
    
    destroy() {
        if (this.sprite) {
            this.sprite.destroy();
        }
    }
}
} // Close the if (typeof Player === 'undefined') block
