import React from 'react'

export default function Environment() {
  return (
    <>
      {/* Sky gradient background */}
      <color attach="background" args={['#87ceeb']} />
      
      {/* Ground plane */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#90ee90" />
      </mesh>
    </>
  )
}