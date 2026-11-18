/**
 * Boot Scene
 * Preloads assets and initializes the game
 */

class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }
    
    preload() {
        // Since we're using simple shapes, we don't need to preload images
        // But we can set up the loading bar if needed
        this.load.on('progress', (value) => {
            // Loading progress
        });
        
        this.load.on('complete', () => {
            // Loading complete
        });
    }
    
    create() {
        // Skip loading screen immediately - React handles the menu UI
        // This scene is just a passthrough when React is controlling
        this.scene.stop('BootScene');
    }
}

