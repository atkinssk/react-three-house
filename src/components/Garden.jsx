import { Box } from '@react-three/drei'
import Tree from './Tree'

export default function Garden() {
    return (
        <>
            {/* Ground/Base - Expanded garden */}
            <Box
                args={[24, 0.2, 20]}
                position={[0, -0.2, 0]}
                castShadow
                receiveShadow
            >
                <meshStandardMaterial color="#4a5d23" />
            </Box>

            {/* Trees around the house - Front yard */}
            <Tree position={[-7, 0, 6]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
            <Tree position={[7, 0, 6]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />

            {/* Back yard trees */}
            <Tree position={[-6, 0, -7]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
            <Tree position={[6, 0, -7]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
            <Tree position={[0, 0, -8]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />

            {/* Side yard trees */}
            <Tree position={[-9, 0, 2]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />
            <Tree position={[-9, 0, -2]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
            <Tree position={[9, 0, 2]} trunkArgs={[0.2, 0.2, 2]} foliageArgs={[1, 2, 8]} />
            <Tree position={[9, 0, -2]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />

            {/* Corner trees for depth */}
            <Tree position={[-10, 0, 8]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
            <Tree position={[10, 0, 8]} trunkArgs={[0.3, 0.3, 3]} foliageArgs={[1.5, 3, 8]} />
            <Tree position={[-10, 0, -8]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
            <Tree position={[10, 0, -8]} trunkArgs={[0.25, 0.25, 2.5]} foliageArgs={[1.2, 2.5, 8]} />
        </>
    )
}