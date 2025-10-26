import Floor from '../Floor'
import Wall from '../Wall'

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
                args={[5.630, 3, 0.1]}
                position={[0, 1.5, 2.15]}
                color={wallColor}
            />

            {/* Side wall */}
            <Wall
                args={[0.1, 3, 4.2]}
                position={[-(5.630 / 2) - 0.05, 1.5, 0]}
                color={wallColor}
            />
        </group>
    )
}