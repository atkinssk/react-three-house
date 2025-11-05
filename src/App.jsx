import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import HUD from './components/UI/HUD'
import TouchControls from './components/UI/TouchControls'

function App() {
  const [controlMode, setControlMode] = useState('orbit')
  const [collisionEnabled, setCollisionEnabled] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const [staircaseType, setStaircaseType] = useState('staircase2a')

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
            staircaseType={staircaseType}
          />
        </Suspense>
      </Canvas>
      <HUD
        controlMode={controlMode}
        setControlMode={setControlMode}
        collisionEnabled={collisionEnabled}
        setCollisionEnabled={setCollisionEnabled}
        opacity={opacity}
        setOpacity={setOpacity}
        staircaseType={staircaseType}
        setStaircaseType={setStaircaseType}
      />
      <TouchControls controlMode={controlMode} />
    </>
  )
}

export default App