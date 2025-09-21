import React from 'react'

export default function ControlToggle({ controlMode, setControlMode }) {
  return (
    <div className="control-toggle">
      <button 
        onClick={() => setControlMode(controlMode === 'orbit' ? 'walk' : 'orbit')}
        className="toggle-button"
      >
        {controlMode === 'orbit' ? '🚶 Switch to Walk Mode' : '🔄 Switch to Orbit Mode'}
      </button>
    </div>
  )
}