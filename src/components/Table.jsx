import React from 'react'
import { Box } from '@react-three/drei'

export default function Table({
    position = [0, 0, 0],
    topArgs = [1.5, 0.1, 0.8],
    legArgs = [0.1, 1, 0.1],
    topColor = '#8b4513',
    legColor = '#8b4513',
}) {
    // Legs are positioned relative to the table top center
    const legOffsets = [
        [-0.5, -0.5, -0.3],
        [0.5, -0.5, -0.3],
        [-0.5, -0.5, 0.3],
        [0.5, -0.5, 0.3],
    ]

    return (
        <group position={position}>
            {/* Table top */}
            <Box args={topArgs} castShadow receiveShadow>
                <meshStandardMaterial color={topColor} />
            </Box>

            {/* Table legs */}
            {legOffsets.map((offset, i) => (
                <Box key={i} args={legArgs} position={offset} castShadow>
                    <meshStandardMaterial color={legColor} />
                </Box>
            ))}
        </group>
    )
}
