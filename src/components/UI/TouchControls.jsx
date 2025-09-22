import React from 'react'
import './TouchControls.css'

export default function TouchControls({ controlMode }) {
  // Only show on mobile devices and when in walk mode
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (!isMobile || controlMode !== 'walk') {
    return null
  }

  return (
    <div className="touch-controls">
      <div className="touch-instructions">
        <div className="instruction-item">
          <span className="instruction-icon">👆</span>
          <span className="instruction-text">Tap to jump</span>
        </div>
        <div className="instruction-item">
          <span className="instruction-icon">↕️</span>
          <span className="instruction-text">Drag up/down to move</span>
        </div>
        <div className="instruction-item">
          <span className="instruction-icon">↔️</span>
          <span className="instruction-text">Drag left/right to turn</span>
        </div>
        <div className="instruction-item">
          <span className="instruction-icon">🏃</span>
          <span className="instruction-text">Long drag to run</span>
        </div>
      </div>
    </div>
  )
}