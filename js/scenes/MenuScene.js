/**
 * Menu Scene
 * Start screen with instructions
 */

class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }
    
    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x0a0a2e);
        
        // Title
        const title = this.add.text(width / 2, height * 0.2, 'CYBER RUNNER', {
            fontSize: '64px',
            color: '#00ffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 6,
            fontStyle: 'bold'
        });
        title.setOrigin(0.5);
        
        // Subtitle
        const subtitle = this.add.text(width / 2, height * 0.32, 'Learn Cybersecurity Through Action', {
            fontSize: '24px',
            color: '#ffffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 3
        });
        subtitle.setOrigin(0.5);
        
        // Instructions
        const instructionsY = height * 0.45;
        const instructions = [
            'CONTROLS:',
            '',
            'Arrow Keys / WASD:',
            '← → Move Left/Right',
            '↑ Jump',
            '↓ Slide',
            '',
            'Mobile: Swipe to move',
            '',
            'GOAL:',
            'Collect security tools (green)',
            'Avoid threats (red)',
            'Keep your risk below 100%',
            'Learn cybersecurity concepts!'
        ];
        
        instructions.forEach((line, index) => {
            const text = this.add.text(width / 2, instructionsY + (index * 28), line, {
                fontSize: line.startsWith('CONTROLS:') || line.startsWith('GOAL:') ? '22px' : '18px',
                color: line.startsWith('CONTROLS:') || line.startsWith('GOAL:') ? '#00ffff' : '#ffffff',
                fontFamily: 'Arial',
                stroke: '#000000',
                strokeThickness: 2,
                align: 'center'
            });
            text.setOrigin(0.5);
        });
        
        // Start button
        const buttonY = height * 0.85;
        const startButton = this.add.rectangle(width / 2, buttonY, 300, 80, 0x00ff00);
        startButton.setStrokeStyle(4, 0xffffff);
        startButton.setInteractive({ useHandCursor: true });
        
        const buttonText = this.add.text(width / 2, buttonY, 'START GAME', {
            fontSize: '32px',
            color: '#000000',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        });
        buttonText.setOrigin(0.5);
        
        // Button hover effect
        startButton.on('pointerover', () => {
            startButton.setFillStyle(0x00cc00);
        });
        
        startButton.on('pointerout', () => {
            startButton.setFillStyle(0x00ff00);
        });
        
        // Start game on click
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
        
        // Also allow keyboard start
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
    }
}

