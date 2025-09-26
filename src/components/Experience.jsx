import React, { useState } from 'react'
import { PointerLockControls, KeyboardControls, OrbitControls } from '@react-three/drei'
import House from '../three/House'
import Lights from '../three/Lights'
import Environment from '../three/Environment'
import WalkControls from '../three/WalkControls'
import ControlToggle from '../components/UI/ControlToggle'
import { AxesHelper } from 'three'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'rotateLeft', keys: ['KeyQ'] },
  { name: 'rotateRight', keys: ['KeyE'] },
]

export default function Experience({ controlMode, setControlMode, collisionEnabled, opacity }) {
  return (
    <>
      {controlMode === 'walk' ? (
        <KeyboardControls map={keyboardMap}>
          <PointerLockControls />
          <WalkControls collisionEnabled={collisionEnabled} />
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
      <House opacity={opacity} />
      <axesHelper args={[2]} position={[0, 1, 3.2]} />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} position={[0, 0.1, 0]} />


    </>
  )
}