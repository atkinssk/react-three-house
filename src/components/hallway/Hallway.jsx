import { Box } from '@react-three/drei'
import { Staircase2a, Staircase2b1, Staircase2b2, Staircase3, Staircase4 } from '../staircase/Staircase'
import GlassPane from '../GlassPane'
import Floor from '../Floor'
import Wall from '../Wall'

export default function Hallway({ staircaseType = 'staircase4', wallOpacity = 0.2 }) {

    return (
        <>
            {/* Ground floor */}
            <Floor
                args={[6, 0.2, 5]}
                position={[0, -0.1, 0]}
                wallOpacity={wallOpacity}
            />

            {/* First floor */}
            <Floor
                args={[3, 0.2, 1.470]}
                position={[-1, 2.970 - 0.1, -1.470 / 2]}
                wallOpacity={wallOpacity}
            />
            <Floor
                args={[1, 0.2, 3.4]}
                position={[1, 2.970 - 0.1, 0.5 / 2]}
                wallOpacity={wallOpacity}
            />

            <GlassPane args={[3, 3, 0.1]} position={[-1, 1.5, 2]} />
            <GlassPane args={[3.5, 3, 0.1]} position={[0.5, 1.5, -1.8]} />

            <Wall args={[0.1, 2.970, 1]} position={[-2.5, 2.970 / 2, 1.5]} wallOpacity={wallOpacity} />
            <Box args={[0.2, 1.981, 0.762]} position={[-2.7, 1.981 / 2, 0.5]}>
                <meshStandardMaterial color="black" />
            </Box>
            <Wall args={[0.1, 2.970, 1.030]} position={[-2.7, 2.970 / 2, 0.5]} wallOpacity={wallOpacity} />
            <Wall args={[0.1, 2.970, 1.470]} position={[-2.7, 2.970 / 2, -0.75]} wallOpacity={wallOpacity} />

            <Wall args={[1.35, 2.970, 0.1]} position={[-1.9, 2.970 / 2, -1.55]} wallOpacity={wallOpacity} />

            {staircaseType === 'staircase2a' && <Staircase2a />}
            {staircaseType === 'staircase2b1' && <Staircase2b1 />}
            {staircaseType === 'staircase2b2' && <Staircase2b2 />}
            {staircaseType === 'staircase3' && <Staircase3 />}
            {staircaseType === 'staircase4' && <Staircase4 />}
        </>
    )
}