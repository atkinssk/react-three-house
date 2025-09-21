import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cone, Cylinder } from '@react-three/drei'

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

      {/* Main house structure */}
      <Box
        args={[8, 4, 6]}
        position={[0, 2, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#d4a574" />
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

      {/* Door components */}
      <group position={[0, 1.1, 3.05]} rotation={[0, Math.PI / 9, 0]}>
        {/* Door - partly open */}
        <Box
          args={[1, 2.2, 0.1]}
          position={[0, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color="#654321" />
        </Box>

        {/* Door handle */}
        <Cylinder
          args={[0.05, 0.05, 0.1]}
          position={[-0.4, 0, 0.1]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <meshStandardMaterial color="#ffd700" />
        </Cylinder>
      </group>

      {/* Front windows - First floor */}
      {/* Left window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[-2.5, 1.5, 3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[-2.5, 1.5, 3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Right window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[2.5, 1.5, 3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[2.5, 1.5, 3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Front windows - Second floor */}
      {/* Left second floor window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[-2.5, 3.2, 3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[-2.5, 3.2, 3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Center second floor window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[0, 3.2, 3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[0, 3.2, 3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Right second floor window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[2.5, 3.2, 3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[2.5, 3.2, 3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Left side windows */}
      {/* Left side window 1 frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[-4.02, 1.5, 1]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[-4.05, 1.5, 1]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Left side window 2 frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[-4.02, 1.5, -1]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[-4.05, 1.5, -1]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Left side second floor window frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[-4.02, 3.2, 0]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[-4.05, 3.2, 0]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Right side windows */}
      {/* Right side window 1 frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[4.02, 1.5, 1]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[4.05, 1.5, 1]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Right side window 2 frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[4.02, 1.5, -1]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[4.05, 1.5, -1]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Right side second floor window frame */}
      <Box
        args={[0.15, 1.4, 1.4]}
        position={[4.02, 3.2, 0]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[0.1, 1.2, 1.2]}
        position={[4.05, 3.2, 0]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Back windows */}
      {/* Back left window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[-2, 1.5, -3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[-2, 1.5, -3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Back right window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[2, 1.5, -3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[2, 1.5, -3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

      {/* Back second floor window frame */}
      <Box
        args={[1.4, 1.4, 0.15]}
        position={[0, 3.2, -3.02]}
        castShadow
      >
        <meshStandardMaterial color="#8b7355" />
      </Box>
      <Box
        args={[1.2, 1.2, 0.1]}
        position={[0, 3.2, -3.05]}
        castShadow
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent={true}
          opacity={0.05}
        />
      </Box>

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