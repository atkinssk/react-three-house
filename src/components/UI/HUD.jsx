
import { useState } from 'react'

export default function HUD({ controlMode, setControlMode, collisionEnabled, setCollisionEnabled, staircaseType = 'staircase2a', setStaircaseType = () => { } }) {
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
          <div style={{ marginBottom: 16 }}>
            <button
              onClick={() => setControlMode(controlMode === 'orbit' ? 'walk' : 'orbit')}
              style={{
                padding: '10px 20px',
                fontSize: 14,
                fontWeight: '500',
                backgroundColor: controlMode === 'orbit' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(33, 150, 243, 0.2)',
                color: 'white',
                border: `1px solid ${controlMode === 'orbit' ? 'rgba(76, 175, 80, 0.5)' : 'rgba(33, 150, 243, 0.5)'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = controlMode === 'orbit' ? 'rgba(76, 175, 80, 0.3)' : 'rgba(33, 150, 243, 0.3)'
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = controlMode === 'orbit' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(33, 150, 243, 0.2)'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '16px' }}>
                {controlMode === 'orbit' ? '🚶' : '🔄'}
              </span>
              <span>
                {controlMode === 'orbit' ? 'Switch to Walk Mode' : 'Switch to Orbit Mode'}
              </span>
            </button>
          </div>
          {controlMode === 'walk' && (
            <div style={{ marginBottom: 16 }}>
              <button
                onClick={() => setCollisionEnabled(!collisionEnabled)}
                style={{
                  padding: '10px 20px',
                  fontSize: 14,
                  fontWeight: '500',
                  backgroundColor: collisionEnabled ? 'rgba(255, 152, 0, 0.2)' : 'rgba(156, 39, 176, 0.2)',
                  color: 'white',
                  border: `1px solid ${collisionEnabled ? 'rgba(255, 152, 0, 0.5)' : 'rgba(156, 39, 176, 0.5)'}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  textAlign: 'center',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = collisionEnabled ? 'rgba(255, 152, 0, 0.3)' : 'rgba(156, 39, 176, 0.3)'
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = collisionEnabled ? 'rgba(255, 152, 0, 0.2)' : 'rgba(156, 39, 176, 0.2)'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ fontSize: '16px' }}>
                  {collisionEnabled ? '🚧' : '👻'}
                </span>
                <span>
                  {collisionEnabled ? 'Collision: ON' : 'Collision: OFF (Ghost Mode)'}
                </span>
              </button>
            </div>
          )}
          <div style={{ marginTop: 12 }}>
            <label style={{ display: 'block', fontSize: 12, opacity: 0.9, marginBottom: 4 }}>Staircase type:</label>
            <select
              value={staircaseType}
              onChange={(e) => setStaircaseType(e.target.value)}
              style={{
                padding: '4px 8px',
                fontSize: 12,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '4px',
                width: 120
              }}
              aria-label="Staircase type"
            >
              <option value="staircase2a" style={{ backgroundColor: '#333', color: 'white' }}>Staircase 2A</option>
              <option value="staircase2b1" style={{ backgroundColor: '#333', color: 'white' }}>Staircase 2B1</option>
              <option value="staircase2b2" style={{ backgroundColor: '#333', color: 'white' }}>Staircase 2B2</option>
              <option value="staircase3" style={{ backgroundColor: '#333', color: 'white' }}>Staircase 3</option>
              <option value="staircase4" style={{ backgroundColor: '#333', color: 'white' }}>Staircase 4</option>
            </select>
          </div>
          {controlMode === 'walk' ? (
            <>
              <p>• Click to lock mouse and look around</p>
              <p>• WASD or Arrow keys to move</p>
              <p>• Q/E to rotate left/right</p>
              <p>• Shift to run</p>
              <p>• Space to jump</p>
              <p>• ESC to unlock mouse</p>
              {!collisionEnabled && (
                <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
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
      )}
    </div>
  )
}