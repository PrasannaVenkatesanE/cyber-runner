/**
 * Game UI Manager
 * Handles HUD, popups, and UI overlays
 */

class GameUI {
    constructor(scene) {
        this.scene = scene;

        // HUD elements
        this.scoreText = null;
        this.distanceText = null;
        this.riskMeter = null;
        this.riskBar = null;
        this.riskText = null;
        this.comboText = null;

        // Popup overlay (DOM element)
        this.popupOverlay = document.getElementById('popup-overlay');
        this.popupTimeout = null;

        // Pause overlay
        this.pauseOverlay = document.getElementById('pause-overlay');

        // Initialize HUD
        this.initHUD();
    }

    initHUD() {
        // HUD is now handled by React's GameHUD component
        // Keeping this method for compatibility but not creating Phaser text elements
        // This prevents duplicate/overlapping UI elements
    }

    updateHUD(score, distance, risk, combo) {
        // HUD updates are now handled by React's GameHUD component
        // This method is kept for compatibility but doesn't do anything
    }

    updateRiskMeter(risk) {
        // Risk meter is now handled by React's GameHUD component
    }

    showPopup(item) {
        // Clear existing timeout
        if (this.popupTimeout) {
            clearTimeout(this.popupTimeout);
        }

        // Get DOM elements
        const header = this.popupOverlay.querySelector('.popup-header');
        const category = this.popupOverlay.querySelector('.popup-category');
        const description = this.popupOverlay.querySelector('.popup-description');

        // Set content
        header.textContent = item.name;
        category.textContent = `${item.category} • ${item.type === 'good' ? '✓ Defense' : '✗ Threat'}`;
        description.textContent = item.description;

        // Style based on item type
        if (item.type === 'good') {
            this.popupOverlay.className = 'popup-good';
        } else {
            this.popupOverlay.className = 'popup-bad';
        }

        // Show popup
        this.popupOverlay.classList.remove('popup-hidden');

        // Auto-hide after 2.5 seconds
        this.popupTimeout = setTimeout(() => {
            this.hidePopup();
        }, 2500);
    }

    hidePopup() {
        this.popupOverlay.classList.add('popup-hidden');
    }

    showPauseScreen() {
        this.pauseOverlay.classList.remove('popup-hidden');
    }

    hidePauseScreen() {
        this.pauseOverlay.classList.add('popup-hidden');
    }

    destroy() {
        // Cleanup handled by Phaser for text objects
        if (this.popupTimeout) {
            clearTimeout(this.popupTimeout);
        }
    }
}

