import { Box, Cylinder } from '@react-three/drei'

export default function Door({
  position = [0, 1.1, 3],
  rotation = [0, Math.PI / 4, 0],
  doorColor = '#654321',
  handleColor = '#ffd700',
  width = 1,
  height = 2.2,
  thickness = 0.1,
  handlePosition = 'left', // 'left' or 'right'
  opacity = 1
}) {
  // Calculate handle position based on door dimensions and side
  const handleOffset = handlePosition === 'left' ? -width * 0.4 : width * 0.4

  return (
    <group position={position} rotation={rotation}>
      {/* Door panel */}
      <Box
        args={[width, height, thickness]}
        position={[0, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={doorColor} transparent opacity={opacity} />
      </Box>

      {/* Door handle */}
      <Cylinder
        args={[0.05, 0.05, 0.1]}
        position={[handleOffset, 0, thickness]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <meshStandardMaterial color={handleColor} />
      </Cylinder>
    </group>
  )
}