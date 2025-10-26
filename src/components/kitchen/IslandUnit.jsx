import { Box } from '@react-three/drei'

export default function IslandUnit({ position = [0, 0, 0], color = "#ffffff" }) {
    return (
        <group position={position}>
            <Box
                args={[3.06, 0.9, 1.7]}
                position={[0, 0.4, 0]} s
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color={color} />
            </Box>
        </group>
    )
}