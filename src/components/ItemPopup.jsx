import React from 'react'
import './ItemPopup.css'

function ItemPopup({ item, onDismiss }) {
  if (!item) return null

  const isGood = item.type === 'good'
  const popupClass = isGood ? 'popup-good' : 'popup-bad'

  return (
    <div className={`item-popup-overlay ${popupClass}`}>
      <div className="item-popup-container">
        <div className="popup-header-section">
          <h2 className="popup-title">{item.name}</h2>
          <div className="popup-badge">
            <span className="badge-category">{item.category}</span>
            <span className={`badge-type ${item.type}`}>
              {isGood ? '✓ Defense' : '✗ Threat'}
            </span>
          </div>
        </div>
        
        <div className="popup-content-section">
          <p className="popup-description">{item.description}</p>
          
          <div className="popup-stats">
            <div className="stat-item">
              <span className="stat-label">Score:</span>
              <span className={`stat-value ${item.type}`}>
                {item.scoreChange > 0 ? '+' : ''}{item.scoreChange}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Risk:</span>
              <span className={`stat-value ${item.type}`}>
                {item.riskChange > 0 ? '+' : ''}{item.riskChange}%
              </span>
            </div>
          </div>
        </div>

        <div className="popup-footer">
          <button 
            className="continue-button"
            onClick={onDismiss}
            autoFocus
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemPopup

