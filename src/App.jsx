import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import UI from './components/UI/HUD'
import ControlToggle from './components/UI/ControlToggle'
import CollisionToggle from './components/UI/CollisionToggle'
import TouchControls from './components/UI/TouchControls'

function App() {
  const [controlMode, setControlMode] = useState('orbit')
  const [collisionEnabled, setCollisionEnabled] = useState(true)
  const [opacity, setOpacity] = useState(1)

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
            opacity={opacity}
          />
        </Suspense>
      </Canvas>
      <UI
        controlMode={controlMode}
        collisionEnabled={collisionEnabled}
        opacity={opacity}
        setOpacity={setOpacity}
      />
      <ControlToggle controlMode={controlMode} setControlMode={setControlMode} />
      {controlMode === 'walk' && (
        <CollisionToggle
          collisionEnabled={collisionEnabled}
          setCollisionEnabled={setCollisionEnabled}
        />
      )}
      <TouchControls controlMode={controlMode} />
    </>
  )
}

export default App