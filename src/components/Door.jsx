import { Box, Cylinder } from '@react-three/drei'

export default function Door({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  doorColor = '#654321',
  handleColor = '#ffd700',
  width = 1,
  height = 2.2,
  thickness = 0.1,
  handlePosition = 'right', // 'left' or 'right'
  opacity = 1
}) {
  // Calculate handle position based on door dimensions and side
  const handleOffset = handlePosition === 'left' ? width * 0.8 : -width * 0.8;
  const positionOffset = handlePosition === 'left' ? width / 2 : -width / 2;
  const rotationOffset = handlePosition === 'left' ?
    [rotation[0], -rotation[1], rotation[2]] :
    [rotation[0], rotation[1], rotation[2]];

  return (
    <group position={[position[0] - positionOffset, position[1], position[2]]}>
      <group rotation={rotationOffset}>
        {/* Door panel */}
        <Box
          args={[width, height, thickness]}
          position={[positionOffset, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color={doorColor} transparent opacity={opacity} />
        </Box>

        {/* Door handle */}
        <Cylinder
          args={[0.05, 0.05, 0.1]}
          position={[handleOffset, 0, thickness]}
          rotation={rotationOffset}
          castShadow
        >
          <meshStandardMaterial color={handleColor} />
        </Cylinder>
      </group>
    </group >
  )
}