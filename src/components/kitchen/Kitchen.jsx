import Floor from '../Floor'
import Wall from '../Wall'

export default function Kitchen({
    position = [0, 0, 0],
    floorColor = "blue",
    wallColor = "red" }) {
    return (
        <group position={position}>
            {/* Kitchen floor */}
            <Floor
                args={[5.630, 0.2, 4.200]}
                position={[0, -0.1, 0]}
                color={floorColor}
            />

            {/* Back wall */}
            <Wall
                args={[5.630, 3, 0.2]}
                position={[0, 1.5, 2.2]}
                color={wallColor}
            />

            {/* Side wall */}
            <Wall
                args={[0.2, 3, 4.2]}
                position={[-(5.630 / 2) - 0.1, 1.5, 0]}
                color={wallColor}
            />
        </group>
    )
}