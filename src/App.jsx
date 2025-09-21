import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import UI from './components/UI/HUD'

function App() {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 1.8, 0],
          fov: 75
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <UI />
    </>
  )
}

export default App