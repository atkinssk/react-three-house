import Floor from '../Floor'
import Wall from '../Wall'
import IslandUnit from './IslandUnit'
import Fridge from './Fridge'
import Oven from './Oven'
import Worktop from './Worktop'

export default function Kitchen({
    position = [0, 0, 0],
    floorColor = "#8b7355",
    wallColor = "#ffffff",
    wallOpacity = 0.2 }) {
    return (
        <group position={position}>
            {/* Kitchen floor */}
            <Floor
                args={[5.630, 0.1, 4.200]}
                position={[0, -0.05, 0]}
                color={floorColor}
                wallOpacity={wallOpacity}
            />

            {/* Back wall */}
            <Wall
                args={[5.630, 2.4, 0.1]}
                position={[0, 1.2, 2.15]}
                color={wallColor}
                wallOpacity={wallOpacity}
            />

            {/* Side wall */}
            <Wall
                args={[0.1, 2.4, 4.2]}
                position={[-(5.630 / 2) - 0.05, 1.2, 0]}
                color={wallColor}
                wallOpacity={wallOpacity}
            />

            <IslandUnit position={[1.2, 0, -1]} />
            <Fridge position={[1.7, 0, 1.6]} rotation={[0, Math.PI, 0]} />
            <Oven position={[-2.5, 1, -1.1]} rotation={[0, Math.PI / 2, 0]} />
            <Oven position={[-2.5, 1, -0.4]} rotation={[0, Math.PI / 2, 0]} />
            <Worktop args={[4, 0.05, 0.75]} position={[-(5.63 - 4) / 2, 0.9, 2.1 - 0.75 / 2]} />
            <Worktop args={[0.65, 0.05, 4.2 - 0.75]} position={[-(5.630 - 0.65) / 2, 0.9, -(0.75 / 2)]} />

        </group>
    )
}