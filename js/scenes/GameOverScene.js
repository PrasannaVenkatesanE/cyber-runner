/**
 * Game Over Scene
 * Displays final score and learning report
 */

class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }
    
    create() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        // Background
        this.add.rectangle(width / 2, height / 2, width, height, 0x0a0a2e);
        
        // Get game data
        const finalScore = this.registry.get('finalScore') || 0;
        const finalDistance = this.registry.get('finalDistance') || 0;
        const report = this.registry.get('report');
        
        // Game Over Title
        const gameOverText = this.add.text(width / 2, 50, 'GAME OVER', {
            fontSize: '48px',
            color: '#ff0000',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 4,
            fontStyle: 'bold'
        });
        gameOverText.setOrigin(0.5);
        
        // Final Score
        const scoreText = this.add.text(width / 2, 120, `Final Score: ${Math.floor(finalScore)}`, {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 3
        });
        scoreText.setOrigin(0.5);
        
        // Distance
        const distanceM = Math.floor(finalDistance);
        const distanceText = distanceM >= 1000 
            ? `${(distanceM / 1000).toFixed(2)}km`
            : `${distanceM}m`;
        const distanceDisplay = this.add.text(width / 2, 160, `Distance: ${distanceText}`, {
            fontSize: '24px',
            color: '#ffffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        });
        distanceDisplay.setOrigin(0.5);
        
        // Cyber Awareness Report Section
        const reportY = 220;
        const reportTitle = this.add.text(width / 2, reportY, 'CYBER AWARENESS REPORT', {
            fontSize: '28px',
            color: '#00ffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 3,
            fontStyle: 'bold'
        });
        reportTitle.setOrigin(0.5);
        
        if (report) {
            // Threat Breakdown
            const threatBreakdown = report.getThreatBreakdown();
            const defenseBreakdown = report.getDefenseBreakdown();
            const weakestArea = report.getWeakestArea();
            const tips = report.generateTips(weakestArea);
            
            // Display threat counts
            let yOffset = reportY + 50;
            const breakdownText = this.add.text(width / 2, yOffset, 'Threats Collected:', {
                fontSize: '20px',
                color: '#ff6666',
                fontFamily: 'Arial',
                stroke: '#000000',
                strokeThickness: 2
            });
            breakdownText.setOrigin(0.5);
            yOffset += 35;
            
            const categories = ['Social', 'Malware', 'Network', 'Auth', 'Crypto'];
            categories.forEach(category => {
                const badCount = threatBreakdown[category] || 0;
                const goodCount = defenseBreakdown[category] || 0;
                if (badCount > 0 || goodCount > 0) {
                    const countText = this.add.text(
                        width / 2,
                        yOffset,
                        `${category}: ${badCount} threats, ${goodCount} defenses`,
                        {
                            fontSize: '16px',
                            color: '#ffffff',
                            fontFamily: 'Arial',
                            stroke: '#000000',
                            strokeThickness: 1
                        }
                    );
                    countText.setOrigin(0.5);
                    yOffset += 25;
                }
            });
            
            // Weakest Area
            yOffset += 20;
            const weakestText = this.add.text(
                width / 2,
                yOffset,
                `Weakest Security Area: ${weakestArea}`,
                {
                    fontSize: '20px',
                    color: '#ffaa00',
                    fontFamily: 'Arial',
                    stroke: '#000000',
                    strokeThickness: 2,
                    fontStyle: 'bold'
                }
            );
            weakestText.setOrigin(0.5);
            
            // Improvement Tips
            yOffset += 50;
            const tipsTitle = this.add.text(width / 2, yOffset, 'Personalized Improvement Tips:', {
                fontSize: '18px',
                color: '#00ff00',
                fontFamily: 'Arial',
                stroke: '#000000',
                strokeThickness: 2
            });
            tipsTitle.setOrigin(0.5);
            yOffset += 35;
            
            tips.forEach((tip, index) => {
                const tipText = this.add.text(
                    width / 2,
                    yOffset,
                    `${index + 1}. ${tip}`,
                    {
                        fontSize: '14px',
                        color: '#ffffff',
                        fontFamily: 'Arial',
                        stroke: '#000000',
                        strokeThickness: 1,
                        wordWrap: { width: width - 100 },
                        align: 'center'
                    }
                );
                tipText.setOrigin(0.5);
                yOffset += tipText.height + 10;
            });
        }
        
        // Restart Button
        const buttonY = height - 80;
        const restartButton = this.add.rectangle(width / 2, buttonY, 300, 70, 0x00ff00);
        restartButton.setStrokeStyle(4, 0xffffff);
        restartButton.setInteractive({ useHandCursor: true });
        
        const buttonText = this.add.text(width / 2, buttonY, 'PLAY AGAIN', {
            fontSize: '28px',
            color: '#000000',
            fontFamily: 'Arial',
            fontStyle: 'bold'
        });
        buttonText.setOrigin(0.5);
        
        // Button hover effect
        restartButton.on('pointerover', () => {
            restartButton.setFillStyle(0x00cc00);
        });
        
        restartButton.on('pointerout', () => {
            restartButton.setFillStyle(0x00ff00);
        });
        
        // Restart game
        restartButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
        
        // Keyboard restart
        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });
        
        // Return to menu
        this.input.keyboard.on('keydown-ESC', () => {
            this.scene.start('MenuScene');
        });
    }
}

