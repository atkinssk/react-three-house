import { Box } from '@react-three/drei'

export default function Worktop({ args, position = [0, 0, 0], rotation = [0, 0, 0], color = "#d4c4a8" }) {
    return (
        <Box
            args={args}
            position={position}
            rotation={rotation}
            castShadow
            receiveShadow
        >
            <meshStandardMaterial color={color} />
        </Box>
    )
}