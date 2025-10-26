import { Box } from '@react-three/drei'

export default function Wall({ args, position, color = "#ffffff" }) {
    return (
        <Box
            args={args}
            position={position}
            castShadow
        >
            <meshStandardMaterial color={color} />
        </Box>
    )
}