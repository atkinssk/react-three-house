import React from 'react'

export default function HUD({ controlMode, collisionEnabled }) {
  return (
    <div className="ui-overlay">
      <h1>3D House {controlMode === 'walk' ? 'Walkthrough' : 'Visualization'}</h1>
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
  )
}