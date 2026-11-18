/**
 * Main Game Entry Point
 * Initializes Phaser 3 and configures the game
 * Note: This is called from React GameContainer component
 */

function initPhaserGame() {
    // Prevent multiple game instances
    if (window.phaserGameInstance) {
        return window.phaserGameInstance
    }

    // Wait for Phaser and gameBridge to be available
    if (typeof Phaser === 'undefined') {
        console.error('Phaser not loaded');
        return null;
    }

    // Get container dimensions
    const container = document.getElementById('game-container');
    const containerWidth = container ? container.clientWidth : 800;
    const containerHeight = container ? container.clientHeight : 600;
    
    // Phaser 3 Game Configuration
    const config = {
        type: Phaser.AUTO,
        width: Math.max(400, containerWidth),
        height: Math.max(300, containerHeight),
        parent: 'game-container',
        backgroundColor: '#0a0a2e',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [BootScene, MenuScene, GameScene, GameOverScene],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            min: {
                width: 400,
                height: 300
            },
            max: {
                width: 1600,
                height: 1200
            },
            fullscreenTarget: 'game-container'
        },
        input: {
            activePointers: 3
        },
        autoFocus: true,
        render: {
            antialias: true,
            pixelArt: false
        }
    };

    // Create Phaser game instance
    const game = new Phaser.Game(config);
    window.phaserGameInstance = game
    
    // Set gameBridge if available
    if (window.gameBridge) {
        window.gameBridge.setPhaserGame(game);
    }
    
    // Start with BootScene but let it transition quickly or be stopped by React
    // React will control the menu display
    
    return game;
}

// Export for use in React component
if (typeof window !== 'undefined') {
    window.initPhaserGame = initPhaserGame;
}

// Prevent context menu on right-click (for mobile)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Prevent zoom on double-tap (for mobile) - only once
if (!window.touchPrevented) {
    window.touchPrevented = true
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

