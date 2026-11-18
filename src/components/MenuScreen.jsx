import React from 'react'
import './MenuScreen.css'

function MenuScreen({ onStart }) {
  return (
    <div className="menu-screen">
      <div className="menu-background">
        <div className="grid-overlay" />
        <div className="particles" />
      </div>
      
      <div className="menu-content">
        <h1 className="menu-title">CYBER RUNNER</h1>
        <p className="menu-subtitle">Learn Cybersecurity Through Action</p>
        
        <div className="instructions">
          <div className="instructions-section">
            <h3 className="section-title">CONTROLS</h3>
            <div className="control-grid">
              <div className="control-item">
                <span className="control-key">← →</span>
                <span className="control-desc">Move Left/Right (Tap or Hold)</span>
              </div>
              <div className="control-item">
                <span className="control-key">Tap</span>
                <span className="control-desc">Quick Movement</span>
              </div>
              <div className="control-item">
                <span className="control-key">Hold</span>
                <span className="control-desc">Continuous Movement</span>
              </div>
              <div className="control-item">
                <span className="control-key">Swipe/Tap</span>
                <span className="control-desc">Mobile Controls</span>
              </div>
            </div>
          </div>
          
          <div className="instructions-section">
            <h3 className="section-title">GOAL</h3>
            <ul className="goal-list">
              <li>Collect security tools (green)</li>
              <li>Avoid threats (red)</li>
              <li>Keep risk below 100%</li>
              <li>Learn cybersecurity concepts!</li>
            </ul>
          </div>
        </div>

        <button className="start-button" onClick={onStart}>
          <span className="button-text">START GAME</span>
          <span className="button-glow" />
        </button>
      </div>
    </div>
  )
}

export default MenuScreen

