/**
 * Game Bridge - Communication between Phaser and React
 * Event system for bidirectional communication
 */

// Prevent duplicate class declaration and multiple instances
if (typeof GameBridge === 'undefined') {
    window.GameBridge = class GameBridge {
        constructor() {
            this.reactCallbacks = {}; // Phaser events -> React callbacks
            this.phaserCallbacks = {}; // React events -> Phaser callbacks
            this.phaserGame = null;
        }
        
        /**
         * Set the Phaser game instance
         */
        setPhaserGame(game) {
            this.phaserGame = game;
        }
        
        /**
         * Emit event from Phaser to React
         */
        emitToReact(eventName, data) {
            if (this.reactCallbacks[eventName]) {
                this.reactCallbacks[eventName].forEach(callback => {
                    callback(data);
                });
            }
        }
        
        /**
         * Register React callback for Phaser events
         */
        onPhaserEvent(eventName, callback) {
            if (!this.reactCallbacks[eventName]) {
                this.reactCallbacks[eventName] = [];
            }
            this.reactCallbacks[eventName].push(callback);
            
            // Return unsubscribe function
            return () => {
                const index = this.reactCallbacks[eventName].indexOf(callback);
                if (index > -1) {
                    this.reactCallbacks[eventName].splice(index, 1);
                }
            };
        }
        
        /**
         * Emit event from React to Phaser
         */
        emitToPhaser(eventName, data) {
            if (this.phaserCallbacks[eventName]) {
                this.phaserCallbacks[eventName].forEach(callback => {
                    callback(data);
                });
            }
        }
        
        /**
         * Register Phaser callback for React events
         */
        onReactEvent(eventName, callback) {
            if (!this.phaserCallbacks[eventName]) {
                this.phaserCallbacks[eventName] = [];
            }
            this.phaserCallbacks[eventName].push(callback);
            
            // Return unsubscribe function
            return () => {
                const index = this.phaserCallbacks[eventName].indexOf(callback);
                if (index > -1) {
                    this.phaserCallbacks[eventName].splice(index, 1);
                }
            };
        }
        
        /**
         * Get current Phaser game instance
         */
        getPhaserGame() {
            return this.phaserGame;
        }
    }

    // Create singleton instance only if it doesn't exist
    if (!window.gameBridge) {
        window.gameBridge = new window.GameBridge();
    }
}

