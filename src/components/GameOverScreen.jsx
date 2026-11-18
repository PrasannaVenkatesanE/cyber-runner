import React from 'react'
import './GameOverScreen.css'

function GameOverScreen({ data, onRestart, onMenu }) {
  if (!data || !data.report) {
    return (
      <div className="gameover-screen">
        <h1>Game Over</h1>
        <button onClick={onRestart}>Play Again</button>
      </div>
    )
  }

  const report = data.report
  const threatBreakdown = report.getThreatBreakdown()
  const defenseBreakdown = report.getDefenseBreakdown()
  const weakestArea = report.getWeakestArea()
  const tips = report.generateTips(weakestArea)

  const distanceM = Math.floor(data.distance)
  const distanceText = distanceM >= 1000 
    ? `${(distanceM / 1000).toFixed(2)}km`
    : `${distanceM}m`

  const categories = ['Social', 'Malware', 'Network', 'Auth', 'Crypto']

  return (
    <div className="gameover-screen">
      <div className="gameover-background">
        <div className="grid-overlay" />
      </div>

      <div className="gameover-content">
        <h1 className="gameover-title">GAME OVER</h1>

        <div className="gameover-stats">
          <div className="stat-card">
            <div className="stat-label">Final Score</div>
            <div className="stat-value score-value">{Math.floor(data.score)}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Distance</div>
            <div className="stat-value distance-value">{distanceText}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Risk Level</div>
            <div className="stat-value risk-value" style={{
              color: data.risk > 70 ? '#ff0000' : data.risk > 40 ? '#ffaa00' : '#00ff00'
            }}>
              {Math.floor(data.risk)}%
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2 className="report-title">CYBER AWARENESS REPORT</h2>

          <div className="breakdown-grid">
            <div className="breakdown-column">
              <h3 className="breakdown-header threats-header">Threats Collected</h3>
              {categories.map(category => {
                const count = threatBreakdown[category] || 0
                if (count === 0) return null
                return (
                  <div key={category} className="breakdown-item threat-item">
                    <span className="breakdown-label">{category}</span>
                    <span className="breakdown-value">{count}</span>
                  </div>
                )
              })}
            </div>

            <div className="breakdown-column">
              <h3 className="breakdown-header defenses-header">Defenses Collected</h3>
              {categories.map(category => {
                const count = defenseBreakdown[category] || 0
                if (count === 0) return null
                return (
                  <div key={category} className="breakdown-item defense-item">
                    <span className="breakdown-label">{category}</span>
                    <span className="breakdown-value">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="weakest-area">
            <div className="weakest-label">Weakest Security Area:</div>
            <div className="weakest-value">{weakestArea}</div>
          </div>

          <div className="tips-section">
            <h3 className="tips-title">Personalized Improvement Tips</h3>
            <div className="tips-list">
              {tips.map((tip, index) => (
                <div key={index} className="tip-item">
                  <span className="tip-number">{index + 1}</span>
                  <p className="tip-text">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gameover-actions">
          <button className="action-button restart-button" onClick={onRestart}>
            Play Again
          </button>
          <button className="action-button menu-button" onClick={onMenu}>
            Main Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOverScreen

