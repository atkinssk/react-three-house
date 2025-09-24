import React from 'react'
import { Box } from '@react-three/drei'

export default function Chair({
    position = [0, 0, 0],
    seatArgs = [0.5, 0.1, 0.5],
    backArgs = [0.5, 0.8, 0.1],
    color = '#654321',
    rotation = [0, 0, 0],
    legArgs = [0.08, 0.6, 0.08],
}) {
    // Seat is centered at group's origin; backrest positioned relative to seat
    const seatPos = [0, 0, 0]
    const backPos = [0, 0.4, 0.25]

    // Compute leg positions so they sit under the seat corners
    const seatHalfX = seatArgs[0] / 2
    const seatHalfY = seatArgs[1] / 2
    const seatHalfZ = seatArgs[2] / 2

    const legHalfX = legArgs[0] / 2
    const legHalfY = legArgs[1] / 2
    const legHalfZ = legArgs[2] / 2

    // leg center y: below the seat by half the leg height plus half the seat height
    const legCenterY = -(legHalfY + seatHalfY)

    const legOffsets = [
        [- (seatHalfX - legHalfX), legCenterY, - (seatHalfZ - legHalfZ)],
        [(seatHalfX - legHalfX), legCenterY, - (seatHalfZ - legHalfZ)],
        [- (seatHalfX - legHalfX), legCenterY, (seatHalfZ - legHalfZ)],
        [(seatHalfX - legHalfX), legCenterY, (seatHalfZ - legHalfZ)],
    ]

    return (
        <group position={position} rotation={rotation}>
            <Box args={seatArgs} position={seatPos} castShadow receiveShadow>
                <meshStandardMaterial color={color} />
            </Box>

            <Box args={backArgs} position={backPos} castShadow>
                <meshStandardMaterial color={color} />
            </Box>

            {/* Legs */}
            {legOffsets.map((pos, i) => (
                <Box key={i} args={legArgs} position={pos} castShadow receiveShadow>
                    <meshStandardMaterial color={color} />
                </Box>
            ))}
        </group>
    )
}
