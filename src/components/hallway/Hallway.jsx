import { Box } from '@react-three/drei'
import { Staircase2a, Staircase2b1, Staircase2b2, Staircase3 } from '../Staircase'
import GlassPane from './GlassPane'

export default function Hallway({ staircaseType = 'staircase2a' }) {
    function Floor({ args, position, color = "#8b7355" }) {
        return <Box
            args={args}
            position={position}
            castShadow
        >
            <meshStandardMaterial color={color} />
        </Box>
    }

    function Wall({ args, position, color = "#ffffff" }) {
        return <Box
            args={args}
            position={position}
            castShadow
        >
            <meshStandardMaterial color={color} />
        </Box>
    }

    return (
        <>
            {/* Ground floor */}
            <Floor
                args={[6, 0.2, 5]}
                position={[0, -0.1, 0]}
            />

            {/* First floor */}
            <Floor
                args={[3, 0.2, 1.470]}
                position={[-1, 2.970 - 0.1, -1.470 / 2]}
            />
            <Floor
                args={[1, 0.2, 3.4]}
                position={[1, 2.970 - 0.1, 0.5 / 2]}
            />

            <GlassPane args={[3, 3, 0.1]} position={[-1, 1.5, 2]} />
            <GlassPane args={[3.5, 3, 0.1]} position={[0.5, 1.5, -1.8]} />

            <Wall args={[0.1, 2.970, 1]} position={[-2.5, 2.970 / 2, 1.5]} />
            <Box args={[0.2, 1.981, 0.762]} position={[-2.7, 1.981 / 2, 0.5]}>
                <meshStandardMaterial color="black" />
            </Box>
            <Wall args={[0.1, 2.970, 1.030]} position={[-2.7, 2.970 / 2, 0.5]} />
            <Wall args={[0.1, 2.970, 1.470]} position={[-2.7, 2.970 / 2, -0.75]} />

            <Wall args={[1.35, 2.970, 0.1]} position={[-1.9, 2.970 / 2, -1.55]} />

            {staircaseType === 'staircase2a' && <Staircase2a />}
            {staircaseType === 'staircase2b1' && <Staircase2b1 />}
            {staircaseType === 'staircase2b2' && <Staircase2b2 />}
            {staircaseType === 'staircase3' && <Staircase3 />}
        </>
    )
}