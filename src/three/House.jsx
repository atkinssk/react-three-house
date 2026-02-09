import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cone } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import Window from '../components/Window'
import Door from '../components/Door'
import Chair from '../components/Chair'
import Garden from '../components/Garden'
import Hallway from '../components/hallway/Hallway'
import Kitchen from '../components/kitchen/Kitchen'
import Stairs from './Stairs'


export default function House({ opacity = 1, staircaseType = 'staircase4' }) {
  const houseRef = useRef()

  // Optional subtle rotation animation
  useFrame((state) => {
    if (houseRef.current) {
      houseRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  function Walls({
    wallColour = '#d4a574',
    opacity = 1
  }) {
    return <>
      {/* House walls with CSG window openings */}
      {/* Front wall with window openings */}
      <mesh position={[0, 2, 2.9]} castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={[7.6, 4, 0.2]} />
          </Base>

          {/* Door opening */}
          <Subtraction position={[0, -0.9, 0]}>
            <boxGeometry args={[1, 2.2, 0.3]} />
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
        <meshStandardMaterial color={wallColour} transparent opacity={opacity} />
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
        <meshStandardMaterial color={wallColour} transparent opacity={opacity} />
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
        <meshStandardMaterial color={wallColour} transparent opacity={opacity} />
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
        <meshStandardMaterial color={wallColour} transparent opacity={opacity} />
      </mesh>

      {/* Door */}
      <Door handlePosition='left' position={[0, 1.1, 3]} rotation={[0, Math.PI / 8, 0]} opacity={opacity} />

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
    </>
  }

  function Roof({
    roofColour = '#8b4513',
    opacity = 1
  }) {
    return <>
      {/* Roof */}
      <Cone
        args={[6, 2.5, 4]}
        position={[0, 5.25, 0]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
      >
        <meshStandardMaterial color={roofColour} transparent opacity={opacity} />
      </Cone>

    </>;
  }

  function Furniture() {
    return <>
      {/* Interior elements to see through windows */}
      {/* Living room furniture */}
      {/* <Box
        args={[2, 0.8, 1]}
        position={[-1.5, 0.6, 1]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#654321" />
      </Box> */}

      {/* Table (refactored into component) */}

      {/* Chairs (refactored into component) */}
      <Chair position={[1, 0.8, 0.5]} rotation={[0, - Math.PI / 2, 0]} />
      <Chair position={[3, 0.8, 0.5]} rotation={[0, Math.PI / 2, 0]} />

    </>;
  }

  return (
    <group ref={houseRef} position={[0, 0, 0]}>
      <Garden />
      {/* <Walls opacity={opacity} /> */}
      {/* <Roof opacity={opacity} /> */}
      {staircaseType == 'blender' ? <Stairs /> :
        <>
          <Hallway staircaseType={staircaseType} wallOpacity={opacity} />
          <Kitchen position={[0, 0, -5]} wallOpacity={opacity} />
        </>

      }
    </group >
  )
}