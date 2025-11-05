
import { useState } from 'react'
import './HUD.css'

export default function HUD({ controlMode, setControlMode, collisionEnabled, setCollisionEnabled, staircaseType = 'staircase4', setStaircaseType = () => { } }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`ui-overlay ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="hud-header">
        <h1>3D House {controlMode === 'walk' ? 'Walkthrough' : 'Visualization'}</h1>
        <button
          className="collapse-button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand HUD' : 'Collapse HUD'}
        >
          {isCollapsed ? '▼' : '▲'}
        </button>
      </div>

      {!isCollapsed && (
        <div className="hud-content">
          <button
            onClick={() => setControlMode(controlMode === 'orbit' ? 'walk' : 'orbit')}
            className={`control-button ${controlMode === 'orbit' ? 'orbit-mode' : 'walk-mode'}`}
          >
            <span className="button-icon">
              {controlMode === 'orbit' ? '🚶' : '🔄'}
            </span>
            <span>
              {controlMode === 'orbit' ? 'Switch to Walk Mode' : 'Switch to Orbit Mode'}
            </span>
          </button>

          {controlMode === 'walk' && (
            <button
              onClick={() => setCollisionEnabled(!collisionEnabled)}
              className={`control-button ${collisionEnabled ? 'collision-enabled' : 'collision-disabled'}`}
            >
              <span className="button-icon">
                {collisionEnabled ? '🚧' : '👻'}
              </span>
              <span>
                {collisionEnabled ? 'Collision: ON' : 'Collision: OFF (Ghost Mode)'}
              </span>
            </button>
          )}

          <div className="staircase-selector">
            <label className="staircase-label">Staircase type:</label>
            <select
              value={staircaseType}
              onChange={(e) => setStaircaseType(e.target.value)}
              className="staircase-select"
              aria-label="Staircase type"
            >
              <option value="staircase0">No Staircase</option>
              <option value="staircase2a">Staircase 2A</option>
              <option value="staircase2b1">Staircase 2B1</option>
              <option value="staircase2b2">Staircase 2B2</option>
              <option value="staircase3">Staircase 3</option>
              <option value="staircase4">Staircase 4</option>
            </select>
          </div>

          <div className="instructions">
            {controlMode === 'walk' ? (
              <>
                <p>• Click to lock mouse and look around</p>
                <p>• WASD or Arrow keys to move</p>
                <p>• Q/E to rotate left/right</p>
                <p>• Shift to run</p>
                <p>• Space to jump</p>
                <p>• ESC to unlock mouse</p>
                {!collisionEnabled && (
                  <p className="ghost-mode-warning">
                    • Ghost mode: Walk through walls
                  </p>
                )}
              </>
            ) : (
              <>
                <p>• Click and drag to rotate</p>
                <p>• Scroll to zoom</p>
                <p>• Right-click and drag to pan</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}