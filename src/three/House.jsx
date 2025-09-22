import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cone, Cylinder } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import Window from '../components/Window'
import Door from '../components/Door'

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
          <Subtraction position={[0, -0.5, 0]}>
            <boxGeometry args={[1.2, 3, 0.3]} />
          </Subtraction>
          {/* Ground floor windows */}
          <Subtraction position={[-2.5, -0.5, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          <Subtraction position={[2.5, -0.5, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          {/* Second floor windows */}
          <Subtraction position={[-2.5, 1.2, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          <Subtraction position={[2.5, 1.2, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
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
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          <Subtraction position={[2, -0.5, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[1.2, 1.5, 0.3]} />
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
            <boxGeometry args={[0.3, 1.5, 1.2]} />
          </Subtraction>
          <Subtraction position={[0, -0.5, -1]}>
            <boxGeometry args={[0.3, 1.5, 1.2]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[0.3, 1.5, 1.2]} />
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
            <boxGeometry args={[0.3, 1.5, 1.2]} />
          </Subtraction>
          <Subtraction position={[0, -0.5, -1]}>
            <boxGeometry args={[0.3, 1.5, 1.2]} />
          </Subtraction>
          {/* Second floor window */}
          <Subtraction position={[0, 1.2, 0]}>
            <boxGeometry args={[0.3, 1.5, 1.2]} />
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

      {/* Table */}
      <Box
        args={[1.5, 0.1, 0.8]}
        position={[1.5, 1, 0.5]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>

      {/* Table legs */}
      <Box
        args={[0.1, 1, 0.1]}
        position={[1, 0.5, 0.2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>
      <Box
        args={[0.1, 1, 0.1]}
        position={[2, 0.5, 0.2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>
      <Box
        args={[0.1, 1, 0.1]}
        position={[1, 0.5, 0.8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>
      <Box
        args={[0.1, 1, 0.1]}
        position={[2, 0.5, 0.8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Box>

      {/* Chairs */}
      <Box
        args={[0.5, 0.1, 0.5]}
        position={[0.5, 0.8, 0.5]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box
        args={[0.5, 0.8, 0.1]}
        position={[0.5, 1.2, 0.75]}
        castShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box>

      <Box
        args={[0.5, 0.1, 0.5]}
        position={[2.5, 0.8, 0.5]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box>
      <Box
        args={[0.5, 0.8, 0.1]}
        position={[2.5, 1.2, 0.75]}
        castShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box>

      {/* Interior back wall decoration */}
      <Box
        args={[1, 1.5, 0.1]}
        position={[0, 2, -2.5]}
        castShadow
      >
        <meshStandardMaterial color="#ff6b6b" />
      </Box>

      {/* Second floor interior */}
      <Box
        args={[7.4, 0.2, 5.4]}
        position={[0, 4.1, 0]}
        receiveShadow
      >
        <meshStandardMaterial color="#a0522d" />
      </Box>

      {/* Second floor furniture */}
      <Box
        args={[2, 0.6, 1.2]}
        position={[-2, 4.5, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#4169e1" />
      </Box>

      <Box
        args={[1, 1.2, 0.5]}
        position={[2, 4.8, 1]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#32cd32" />
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
      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[-7, 1.25, 6]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[-7, 3.75, 6]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.2, 0.2, 2]}
        position={[7, 1, 6]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1, 2, 8]}
        position={[7, 3, 6]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      {/* Back yard trees */}
      <Cylinder
        args={[0.3, 0.3, 3]}
        position={[-6, 1.5, -7]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.5, 3, 8]}
        position={[-6, 4.5, -7]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[6, 1.25, -7]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[6, 3.75, -7]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.2, 0.2, 2]}
        position={[0, 1, -8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1, 2, 8]}
        position={[0, 3, -8]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      {/* Side yard trees */}
      <Cylinder
        args={[0.2, 0.2, 2]}
        position={[-9, 1, 2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1, 2, 8]}
        position={[-9, 3, 2]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[-9, 1.25, -2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[-9, 3.75, -2]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.2, 0.2, 2]}
        position={[9, 1, 2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1, 2, 8]}
        position={[9, 3, 2]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[9, 1.25, -2]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[9, 3.75, -2]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      {/* Corner trees for depth */}
      <Cylinder
        args={[0.3, 0.3, 3]}
        position={[-10, 1.5, 8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.5, 3, 8]}
        position={[-10, 4.5, 8]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.3, 0.3, 3]}
        position={[10, 1.5, 8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.5, 3, 8]}
        position={[10, 4.5, 8]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[-10, 1.25, -8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[-10, 3.75, -8]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>

      <Cylinder
        args={[0.25, 0.25, 2.5]}
        position={[10, 1.25, -8]}
        castShadow
      >
        <meshStandardMaterial color="#8b4513" />
      </Cylinder>
      <Cone
        args={[1.2, 2.5, 8]}
        position={[10, 3.75, -8]}
        castShadow
      >
        <meshStandardMaterial color="#228b22" />
      </Cone>
    </group>
  )
}