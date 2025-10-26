import Floor from '../Floor'
import Wall from '../Wall'
import IslandUnit from './IslandUnit'

export default function Kitchen({
    position = [0, 0, 0],
    floorColor = "#8b7355",
    wallColor = "#ffffff" }) {
    return (
        <group position={position}>
            {/* Kitchen floor */}
            <Floor
                args={[5.630, 0.1, 4.200]}
                position={[0, -0.05, 0]}
                color={floorColor}
            />

            {/* Back wall */}
            <Wall
                args={[5.630, 2.4, 0.1]}
                position={[0, 1.2, 2.15]}
                color={wallColor}
            />

            {/* Side wall */}
            <Wall
                args={[0.1, 2.4, 4.2]}
                position={[-(5.630 / 2) - 0.05, 1.2, 0]}
                color={wallColor}
            />

            <IslandUnit position={[1.2, 0, -1]} />
        </group>
    )
}