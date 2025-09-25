import React from 'react'
import { Cylinder, Cone } from '@react-three/drei'

export default function Tree({
    position = [0, 0, 0],
    trunkArgs = [0.25, 0.25, 2.5],
    foliageArgs = [1.2, 2.5, 8],
    trunkColor = '#8b4513',
    foliageColor = '#228b22',
    castShadow = true,
}) {
    const [, , trunkHeight] = trunkArgs
    const [, foliageHeight] = foliageArgs

    // Now the group's position corresponds to the trunk base (the bottom of the trunk).
    // Cylinder (trunk) geometry is centered at its origin, so to place the trunk
    // with its base at y=0 we move the cylinder up by trunkHeight/2.
    const trunkCenterY = trunkHeight / 2

    // Place the foliage (cone) so its base aligns with the top of the trunk.
    // Cone geometry is centered, so its center should be at trunkHeight + foliageHeight/2.
    const foliageCenterY = trunkHeight + foliageHeight / 2

    return (
        <group position={position}>
            <Cylinder args={trunkArgs} position={[0, trunkCenterY, 0]} castShadow={castShadow}>
                <meshStandardMaterial color={trunkColor} />
            </Cylinder>

            <Cone args={foliageArgs} position={[0, foliageCenterY, 0]} castShadow={castShadow}>
                <meshStandardMaterial color={foliageColor} />
            </Cone>
        </group>
    )
}
