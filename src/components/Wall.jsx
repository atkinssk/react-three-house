import { useState } from 'react'
import { Box } from '@react-three/drei'

export default function Wall({ args, position, color = "#ffffff" }) {
    const [isTransparent, setIsTransparent] = useState(false)

    const handleClick = (event) => {
        event.stopPropagation()
        setIsTransparent(!isTransparent)
    }

    return (
        <Box
            args={args}
            position={position}
            castShadow
            onClick={handleClick}
        >
            {isTransparent ? (
                <meshStandardMaterial
                    color={color}
                    transparent={true}
                    opacity={0.8}
                    depthWrite={false}
                    roughness={0.05}
                    metalness={0.0}
                    envMapIntensity={0.8}
                    alphaTest={0.01}
                />
            ) : (
                <meshStandardMaterial
                    color={color}
                    transparent={false}
                    opacity={1}
                    depthWrite={true}
                    roughness={0.8}
                    metalness={0.0}
                    envMapIntensity={1.0}
                    alphaTest={0}
                />
            )}
        </Box>
    )
}