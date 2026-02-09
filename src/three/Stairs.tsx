import modelUrl from '../assets/Stairs.glb?url';

import { useGLTF } from '@react-three/drei'

export default function Stairs(props) {
    const { scene } = useGLTF(modelUrl)
    return <primitive object={scene} {...props} />
}


