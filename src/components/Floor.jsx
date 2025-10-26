import { Box } from '@react-three/drei'

export default function Floor({ args, position, color = "#8b7355" }) {
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