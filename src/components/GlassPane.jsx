import { Box } from '@react-three/drei'

export default function GlassPane({
    args,
    position = [0, 0, 0],
    glassColor = '#e6f3ff',
    glassOpacity = 0.2
}
) {
    return <Box
        args={args}
        position={position}
        receiveShadow
    >
        <meshStandardMaterial
            color={glassColor}
            transparent={true}
            opacity={glassOpacity}
            roughness={0.05}
            metalness={0.0}
            envMapIntensity={0.8}
        />
    </Box>

};

