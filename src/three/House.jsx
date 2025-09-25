import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cone } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import Window from '../components/Window'
import Door from '../components/Door'
import Table from '../components/Table'
import Chair from '../components/Chair'
import Tree from './Tree'

export default function House() {
  const houseRef = useRef()

  // Optional subtle rotation animation
  useFrame((state) => {
    if (houseRef.current) {
      houseRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={houseRef} position={[0, 0, 0]}>
      {/* Ground/Base - Expanded garden */}
      <Box
        args={[24, 0.2, 20]}
        position={[0, -0.1, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#4a5d23" />
      </Box>

      {/* House walls with CSG window openings */}
      {/* Front wall with window openings */}
      <mesh position={[0, 2, 2.9]} castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={[7.6, 4, 0.2]} />
          </Base>

          {/* Door opening */}
          <Subtraction position={[0, -0.9, 0]}>
            <boxGeometry args={[1.2, 2.2, 0.3]} />
          </Subtraction>

          {/* Ground floor windows */}
          <Subtraction position={[-2.5, -0.5, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
          <Subtraction position={[2.5, -0.5, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>

          {/* Second floor windows */}
          <Subtraction position={[-2.5, 1.2, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
          <Subtraction position={[2.5, 1.2, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Back wall with window openings */}
      <mesh position={[0, 2, -2.9]} castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={[7.6, 4, 0.2]} />
          </Base>
          {/* Ground floor windows */}
          <Subtraction position={[-2, -0.5, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
          <Subtraction position={[2, -0.5, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[1.4, 1.4, 0.3]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Left wall with window openings */}
      <mesh position={[-3.9, 2, 0]} castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={[0.2, 4, 6]} />
          </Base>
          {/* Ground floor windows */}
          <Subtraction position={[0, -0.5, 1]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
          <Subtraction position={[0, -0.5, -1]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Right wall with window openings */}
      <mesh position={[3.9, 2, 0]} castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={[0.2, 4, 6]} />
          </Base>
          {/* Ground floor windows */}
          <Subtraction position={[0, -0.5, 1]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
          <Subtraction position={[0, -0.5, -1]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[0.3, 1.4, 1.4]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color="#d4a574" />
      </mesh>

      {/* Interior floor */}
      <Box
        args={[7.6, 0.2, 5.6]}
        position={[0, 0.1, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>

      {/* Interior elements to see through windows */}
      {/* Living room furniture */}
      <Box
        args={[2, 0.8, 1]}
        position={[-1.5, 0.6, 1]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box>

      {/* Table (refactored into component) */}
      <Table position={[1.5, 1, 0.5]} />

      {/* Chairs (refactored into component) */}
      <Chair position={[0.5, 0.8, 0.5]} />
      <Chair position={[2.5, 0.8, 0.5]} />

      {/* Interior back wall decoration */}
      <Box
        args={[1, 1.5, 0.1]}
        position={[0, 2, -2.5]}
        castShadow
      >
        <meshStandardMaterial color="#ff6b6b" />
      </Box>

      {/* Roof */}
      <Cone
        args={[6, 2.5, 4]}
        position={[0, 5.25, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cone>

      {/* Door */}
      <Door />

      {/* Front windows */}
      <Window position={[-2.5, 1.5, 3.02]} orientation="front" />
      <Window position={[2.5, 1.5, 3.02]} orientation="front" />

      {/* Front windows - Second floor */}
      <Window position={[-2.5, 3.2, 3.02]} orientation="front" />
      <Window position={[0, 3.2, 3.02]} orientation="front" />
      <Window position={[2.5, 3.2, 3.02]} orientation="front" />

      {/* Left side windows */}
      <Window position={[-4.02, 1.5, 1]} orientation="left" />
      <Window position={[-4.02, 1.5, -1]} orientation="left" />
      <Window position={[-4.02, 3.2, 0]} orientation="left" />

      {/* Right side windows */}
      <Window position={[4.02, 1.5, 1]} orientation="right" />
      <Window position={[4.02, 1.5, -1]} orientation="right" />
      <Window position={[4.02, 3.2, 0]} orientation="right" />

      {/* Back windows */}
      <Window position={[-2, 1.5, -3.02]} orientation="back" />
      <Window position={[2, 1.5, -3.02]} orientation="back" />
      <Window position={[0, 3.2, -3.02]} orientation="back" />

      {/* Trees around the house - Front yard */}
      <Tree position={[-7, 0, 6]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
      <Tree position={[7, 0, 6]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />

      {/* Back yard trees */}
      <Tree position={[-6, 0, -7]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
      <Tree position={[6, 0, -7]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
      <Tree position={[0, 0, -8]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />

      {/* Side yard trees */}
      <Tree position={[-9, 0, 2]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />
      <Tree position={[-9, 0, -2]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
      <Tree position={[9, 0, 2]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />
      <Tree position={[9, 0, -2]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />

      {/* Corner trees for depth */}
      <Tree position={[-10, 0, 8]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
      <Tree position={[10, 0, 8]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
      <Tree position={[-10, 0, -8]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
      <Tree position={[10, 0, -8]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
    </group>
  )
}