import React from 'react'
import { OrbitControls } from '@react-three/drei'
import House from '../three/House'
import Lights from '../three/Lights'
import Environment from '../three/Environment'

export default function Experience() {
  return (
    <>
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={50}
      />
      
      <Lights />
      <Environment />
      <House />
    </>
  )
}