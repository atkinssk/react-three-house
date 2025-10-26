import { Box } from '@react-three/drei'

export default function Oven({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    return (
        <group position={position} rotation={rotation}>
            {/* Main oven body */}
            <Box
                args={[0.594, 0.595, 0.548]}
                position={[0, 0.595 / 2, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color="#333333" />
            </Box>

            {/* Oven door (slightly lighter gray) */}
            <Box
                args={[0.5, 0.45, 0.02]}
                position={[0, 0.3, 0.285]}
                castShadow
            >
                <meshStandardMaterial color="#666666" />
            </Box>

            {/* Oven handle */}
            <Box
                args={[0.3, 0.03, 0.03]}
                position={[0, 0.5, 0.3]}
                castShadow
            >
                <meshStandardMaterial color="#888888" />
            </Box>

            {/* Control panel */}
            <Box
                args={[0.4, 0.08, 0.01]}
                position={[0, 0.55, 0.285]}
                castShadow
            >
                <meshStandardMaterial color="#222222" />
            </Box>
        </group>
    )
}