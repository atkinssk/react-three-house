import React, { useState } from 'react'
import { PointerLockControls, KeyboardControls, OrbitControls } from '@react-three/drei'
import House from '../three/House'
import Lights from '../three/Lights'
import Environment from '../three/Environment'
import WalkControls from '../three/WalkControls'
import ControlToggle from '../components/UI/ControlToggle'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
]

export default function Experience({ controlMode, setControlMode }) {
  return (
    <>
      {controlMode === 'walk' ? (
        <KeyboardControls map={keyboardMap}>
          <PointerLockControls />
          <WalkControls />
        </KeyboardControls>
      ) : (
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={50}
        />
      )}
      
      <Lights />
      <Environment />
      <House />
    </>
  )
}