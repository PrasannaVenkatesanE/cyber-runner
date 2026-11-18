import React from 'react'
import './PauseScreen.css'

function PauseScreen({ onResume }) {
  return (
    <div className="pause-overlay">
      <div className="pause-content">
        <h2 className="pause-title">PAUSED</h2>
        <p className="pause-text">Press P, ESC, or click to resume</p>
        <button className="resume-button" onClick={onResume}>
          Resume
        </button>
      </div>
    </div>
  )
}

export default PauseScreen

