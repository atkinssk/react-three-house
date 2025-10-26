import { Box } from '@react-three/drei'

export default function Fridge({ rotation = [0, 0, 0], position = [0, 0, 0], color = "#e8e8e8" }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Main fridge body */}
            <Box
                args={[0.91, 1.83, 0.731]}
                position={[0, 1.83 / 2, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color={color} />
            </Box>

            {/* Fridge door handle */}
            <Box
                args={[0.05, 0.3, 0.05]}
                position={[0.25, 1.2, 0]}
                castShadow
            >
                <meshStandardMaterial color="#333333" />
            </Box>

            {/* Freezer door handle */}
            <Box
                args={[0.05, 0.2, 0.05]}
                position={[0.25, 0.4, 0]}
                castShadow
            >
                <meshStandardMaterial color="#333333" />
            </Box>
        </group>
    )
}