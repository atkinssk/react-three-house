import { Box } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'

export default function Window({
  position,
  rotation = [0, 0, 0],
  orientation = 'front',
  frameColor = '#8b7355',
  glassColor = '#e6f3ff',
  glassOpacity = 0.2
}) {
  // Calculate frame and glass dimensions and positions based on orientation
  const isVertical = orientation === 'left' || orientation === 'right'

  const frameArgs = isVertical ? [0.15, 1.4, 1.4] : [1.4, 1.4, 0.15]
  const glassArgs = isVertical ? [0.1, 1.2, 1.2] : [1.2, 1.2, 0.1]

  // Offset for glass position relative to frame
  const glassOffset = isVertical
    ? (orientation === 'left' ? [-0.03, 0, 0] : [0.03, 0, 0])
    : (orientation === 'front' ? [0, 0, 0.03] : [0, 0, -0.03])

  return (
    <group position={position} rotation={rotation}>
      {/* Window frame with CSG cutout for glass */}
      <mesh castShadow receiveShadow>
        <Geometry>
          <Base>
            <boxGeometry args={frameArgs} />
          </Base>
          {/* Cut out the glass opening */}
          <Subtraction position={glassOffset}>
            <boxGeometry args={glassArgs} />
          </Subtraction>
          {/* Add mullion cutouts for cross pattern - smaller to preserve frame */}
          <Subtraction position={glassOffset}>
            <boxGeometry args={isVertical ? [0.08, 1.1, 0.06] : [0.06, 1.1, 0.08]} />
          </Subtraction>
          <Subtraction position={glassOffset}>
            <boxGeometry args={isVertical ? [0.08, 0.06, 1.1] : [1.1, 0.06, 0.08]} />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color={frameColor} />
      </mesh>

      {/* Window glass panes (4 separate panes) */}
      {/* Top left pane */}
      <Box
        args={isVertical ? [0.05, 0.55, 0.55] : [0.55, 0.55, 0.05]}
        position={[
          glassOffset[0] + (isVertical ? 0 : -0.325),
          glassOffset[1] + 0.325,
          glassOffset[2] + (isVertical ? -0.325 : 0)
        ]}
        receiveShadow
      >
        <meshStandardMaterial
          color={glassColor}
          transparent={true}
          opacity={glassOpacity}
          roughness={0.05}
          metalness={0.0}
          envMapIntensity={0.8}
        />
      </Box>

      {/* Top right pane */}
      <Box
        args={isVertical ? [0.05, 0.55, 0.55] : [0.55, 0.55, 0.05]}
        position={[
          glassOffset[0] + (isVertical ? 0 : 0.325),
          glassOffset[1] + 0.325,
          glassOffset[2] + (isVertical ? 0.325 : 0)
        ]}
        receiveShadow
      >
        <meshStandardMaterial
          color={glassColor}
          transparent={true}
          opacity={glassOpacity}
          roughness={0.05}
          metalness={0.0}
          envMapIntensity={0.8}
        />
      </Box>

      {/* Bottom left pane */}
      <Box
        args={isVertical ? [0.05, 0.55, 0.55] : [0.55, 0.55, 0.05]}
        position={[
          glassOffset[0] + (isVertical ? 0 : -0.325),
          glassOffset[1] - 0.325,
          glassOffset[2] + (isVertical ? -0.325 : 0)
        ]}
        receiveShadow
      >
        <meshStandardMaterial
          color={glassColor}
          transparent={true}
          opacity={glassOpacity}
          roughness={0.05}
          metalness={0.0}
          envMapIntensity={0.8}
        />
      </Box>

      {/* Bottom right pane */}
      <Box
        args={isVertical ? [0.05, 0.55, 0.55] : [0.55, 0.55, 0.05]}
        position={[
          glassOffset[0] + (isVertical ? 0 : 0.325),
          glassOffset[1] - 0.325,
          glassOffset[2] + (isVertical ? 0.325 : 0)
        ]}
        receiveShadow
      >
        <meshStandardMaterial
          color={glassColor}
          transparent={true}
          opacity={glassOpacity}
          roughness={0.05}
          metalness={0.0}
          envMapIntensity={0.8}
        />
      </Box>

      {/* Mullions (cross bars) - thinner and positioned properly */}
      {/* Horizontal mullion */}
      <Box
        args={isVertical ? [0.06, 0.04, 1.2] : [1.2, 0.04, 0.06]}
        position={glassOffset}
        castShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>

      {/* Vertical mullion */}
      <Box
        args={isVertical ? [0.06, 1.2, 0.04] : [0.04, 1.2, 0.06]}
        position={glassOffset}
        castShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>
    </group>
  )
}