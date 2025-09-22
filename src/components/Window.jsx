import { Box } from '@react-three/drei'

export default function Window({ 
  position, 
  rotation = [0, 0, 0], 
  orientation = 'front',
  frameColor = '#8b7355',
  glassColor = '#ffffff',
  glassOpacity = 0.05
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
      {/* Window frame */}
      <Box
        args={frameArgs}
        castShadow
      >
        <meshStandardMaterial color={frameColor} />
      </Box>
      
      {/* Window glass */}
      <Box
        args={glassArgs}
        position={glassOffset}
        castShadow
      >
        <meshStandardMaterial
          color={glassColor}
          transparent={true}
          opacity={glassOpacity}
        />
      </Box>
    </group>
  )
}