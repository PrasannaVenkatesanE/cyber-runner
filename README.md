# Cyber Runner

A gamified cybersecurity learning platform where users learn cybersecurity concepts through an endless runner action game.

## Overview

Cyber Runner combines education with entertainment by presenting cybersecurity concepts in a fun, interactive game format. Players navigate through a digital world, collecting security tools and avoiding threats while learning real cybersecurity principles.

## Features

- **2D Endless Runner Gameplay**: Subway Surfers-style gameplay with 3 lanes, jumping, and sliding
- **40+ Cybersecurity Items**: Learn about threats, defenses, and best practices
- **Real-time Learning**: Educational popups explain each cybersecurity concept
- **Risk Management**: Track your security posture with a dynamic risk meter
- **Combo System**: Bonus points for collecting consecutive security tools
- **Difficulty Scaling**: Game speed and complexity increase with distance
- **Personalized Reports**: Get detailed feedback on your weakest security areas
- **Mobile Optimized**: Touch controls and responsive design

## Gameplay

### Controls

**Desktop:**
- ← → Arrow Keys: Move left/right between lanes
- ↑ Arrow Key / Space: Jump
- ↓ Arrow Key: Slide
- P: Pause/Resume

**Mobile:**
- Swipe left/right: Move between lanes
- Swipe up: Jump
- Swipe down: Slide
- Tap top-right corner: Pause/Resume

### Objectives

1. **Collect Security Tools (Green Items)**: Increase your score and reduce risk
2. **Avoid Threats (Red Items)**: Prevent score loss and risk increase
3. **Learn Concepts**: Read popups to understand cybersecurity principles
4. **Maintain Low Risk**: Game ends if risk reaches 100%

### Item Categories

- **Social**: Phishing, social engineering attacks and defenses
- **Malware**: Viruses, ransomware, and protective measures
- **Network**: Network security threats and solutions
- **Auth**: Authentication best practices and vulnerabilities
- **Crypto**: Cryptography concepts and common mistakes

## Technology Stack

- **Phaser 3.80+**: 2D game framework
- **HTML5 Canvas**: Rendering engine
- **Vanilla JavaScript (ES6+)**: Game logic
- **CSS3**: UI styling and responsive design

## Project Structure

```
cyber_runner/
├── index.html              # Main HTML entry point
├── css/
│   └── style.css          # Global styles and UI overlays
├── js/
│   ├── main.js            # Phaser 3 game initialization
│   ├── scenes/
│   │   ├── BootScene.js   # Preload and initialization
│   │   ├── MenuScene.js   # Start screen with instructions
│   │   ├── GameScene.js   # Main game logic
│   │   └── GameOverScene.js # End screen with learning report
│   ├── player.js          # Player controller and movement
│   ├── items.js           # Cybersecurity item configurations
│   ├── spawner.js         # Item spawning and difficulty scaling
│   ├── ui.js              # HUD, popups, and UI management
│   └── report.js          # Learning report generation
└── README.md              # Project documentation
```

## Getting Started

1. **Open the Game**: Simply open `index.html` in a modern web browser
   - No build process required
   - Phaser 3 is loaded via CDN
   - Works offline after initial load

2. **Play**: Click "START GAME" or press Space to begin

3. **Learn**: Collect items and read the educational popups to learn about cybersecurity

4. **Review**: After the game ends, review your Cyber Awareness Report to see areas for improvement

## Game Mechanics

### Scoring System
- **Good Items**: Positive score changes (varies by item)
- **Bad Items**: Negative score changes
- **Combo Multiplier**: 3 in a row = 1.5x, 5 in a row = 2x bonus

### Risk System
- Starts at 0%
- Bad items increase risk (5-25% depending on severity)
- Good items decrease risk (3-15%)
- Game over at 100% risk

### Difficulty Scaling
- **Speed**: Increases by 10 pixels/sec every 100m
- **Spawn Rate**: Items spawn more frequently as distance increases
- **Crypto Items**: Appear more frequently in later game stages

## Educational Content

The game includes 40+ cybersecurity items covering:

- Social Engineering: Phishing, fake emails, social engineering
- Malware: Viruses, spyware, ransomware, worms
- Network Security: Open ports, WiFi security, firewalls, VPNs
- Authentication: Passwords, MFA, account security
- Cryptography: Encryption, hashing, key management

Each item includes:
- Clear name and category
- Educational description
- Score and risk impact
- Real-world context

## Extending the Game

### Adding New Items

Simply add to the `CYBERSECURITY_ITEMS` array in `js/items.js`:

```javascript
{
    id: 'new_item_id',
    name: 'Item Name',
    type: 'good' | 'bad',
    category: 'Social' | 'Malware' | 'Network' | 'Auth' | 'Crypto',
    scoreChange: 50,      // Positive for good, negative for bad
    riskChange: -10,      // Positive increases risk, negative decreases
    description: 'Educational description here',
    color: 0x00ff00       // Hex color code
}
```

### Customizing Difficulty

Edit values in `js/spawner.js`:
- `baseSpawnRate`: Time between item spawns
- `baseSpeed`: Initial scroll speed
- `calculateSpawnRate()`: Spawn rate scaling function
- `updateSpeed()`: Speed scaling function

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support with touch controls

## License

This project is open source and available for educational use.

## Credits

Built with [Phaser 3](https://phaser.io/) - A fast, free, and fun open source HTML5 game framework.

