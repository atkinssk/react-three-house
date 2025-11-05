import { useState } from 'react'
import { Box } from '@react-three/drei'

export default function Floor({ args, position, color = "#8b7355", wallOpacity = 0.2, enableTransparencyClick = true }) {
    const [isTransparent, setIsTransparent] = useState(false)

    const handleClick = (event) => {
        if (!enableTransparencyClick) return
        event.stopPropagation()
        setIsTransparent(!isTransparent)
    }

    return (
        <Box
            args={args}
            position={position}
            castShadow
            onClick={enableTransparencyClick ? handleClick : undefined}
        >
            {isTransparent ? (
                <meshStandardMaterial
                    color={color}
                    transparent={true}
                    opacity={wallOpacity}
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