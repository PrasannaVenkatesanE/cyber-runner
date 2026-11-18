import React from 'react'
import './GameHUD.css'

function GameHUD({ score, distance, risk, combo }) {
  const distanceM = Math.floor(distance)
  const distanceText = distanceM >= 1000 
    ? `${(distanceM / 1000).toFixed(2)}km`
    : `${distanceM}m`

  const riskColor = risk > 70 ? '#ff0000' : risk > 40 ? '#ffaa00' : risk > 20 ? '#ffff00' : '#00ff00'
  const riskWidth = `${Math.max(0, Math.min(100, risk))}%`

  return (
    <div className="game-hud">
      <div className="hud-left">
        <div className="hud-stat">
          <span className="hud-label">Score</span>
          <span className="hud-value score-value">{Math.floor(score)}</span>
        </div>
        <div className="hud-stat">
          <span className="hud-label">Distance</span>
          <span className="hud-value distance-value">{distanceText}</span>
        </div>
      </div>

      <div className="hud-right">
        <div className="risk-meter-container">
          <div className="risk-label">Risk</div>
          <div className="risk-bar-wrapper">
            <div 
              className="risk-bar" 
              style={{ 
                width: riskWidth,
                backgroundColor: riskColor,
                boxShadow: `0 0 20px ${riskColor}`
              }}
            />
          </div>
          <div className="risk-percentage" style={{ color: riskColor }}>
            {Math.floor(risk)}%
          </div>
        </div>
      </div>

      {combo > 1 && (
        <div className="combo-indicator">
          COMBO x{combo}!
        </div>
      )}
    </div>
  )
}

export default GameHUD

