import React from 'react'

export default function CollisionToggle({ collisionEnabled, setCollisionEnabled }) {
  return (
    <div className="collision-toggle">
      <button 
        onClick={() => setCollisionEnabled(!collisionEnabled)}
        className={`toggle-button ${collisionEnabled ? 'enabled' : 'disabled'}`}
      >
        {collisionEnabled ? '🚧 Collision: ON' : '👻 Collision: OFF'}
      </button>
    </div>
  )
}