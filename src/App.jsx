import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import UI from './components/UI/HUD'
import ControlToggle from './components/UI/ControlToggle'
import CollisionToggle from './components/UI/CollisionToggle'

function App() {
  const [controlMode, setControlMode] = useState('orbit')
  const [collisionEnabled, setCollisionEnabled] = useState(true)

  return (
    <>
      <Canvas
        camera={{
          position: controlMode === 'walk' ? [0, 1.8, 0] : [10, 8, 10],
          fov: controlMode === 'walk' ? 75 : 50
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Experience
            controlMode={controlMode}
            setControlMode={setControlMode}
            collisionEnabled={collisionEnabled}
          />
        </Suspense>
      </Canvas>
      <UI controlMode={controlMode} collisionEnabled={collisionEnabled} />
      <ControlToggle controlMode={controlMode} setControlMode={setControlMode} />
      {controlMode === 'walk' && (
        <CollisionToggle
          collisionEnabled={collisionEnabled}
          setCollisionEnabled={setCollisionEnabled}
        />
      )}
    </>
  )
}

export default App