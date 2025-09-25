// Staircase.jsx
import React from "react";

function Step({ position, size }) {
    return (
        <mesh position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial color="lightgray" />
        </mesh>
    );
}

function Flight({ steps, stepHeight, stepThickness, stepDepth, stepWidth, startPos, direction }) {
    const meshes = [];

    for (let i = 0; i < steps; i++) {
        const x = startPos[0] + (direction[0] * i * stepDepth);
        const y = startPos[1] + i * stepHeight;
        const z = startPos[2] + (direction[2] * i * stepDepth);

        meshes.push(
            <Step
                castShadow
                key={i}
                position={[x, y, z]}
                size={[
                    stepWidth * direction[2] + stepDepth * direction[0],
                    stepThickness,
                    stepDepth * direction[2] + stepWidth * direction[0]
                ]}
            />
        );
    }

    return <>{meshes}</>;
}

function Landing({ position, width, height, depth }) {
    return (
        <mesh position={position}>
            <boxGeometry args={[width, height, depth]} />
            <meshStandardMaterial color="darkgray" />
        </mesh>
    );
}

export function Staircase() {
    const stepHeight = 0.2;
    const stepThickness = 0.1;
    const stepDepth = 0.3;
    const stepWidth = 1;
    const stepsFirstFlight = 3;
    const stepsSecondFlight = 4;
    const stepsThirdFlight = 3;

    // First flight
    const firstFlightStart = [0, stepHeight * 1.5, 0];
    const firstFlightDir = [0, 0, 1]; // forward

    // First landing
    const firstLandingPos = [
        firstFlightStart[0] + (firstFlightDir[0] * (stepsFirstFlight + 1) * stepDepth),
        firstFlightStart[1] + (stepsFirstFlight) * stepHeight,
        firstFlightStart[2] + (firstFlightDir[2] * (stepsFirstFlight + 1) * stepDepth)
    ];

    // Second flight (to the left)
    const secondFlightDir = [-1, 0, 0]; // sideways
    const secondFlightStart = [
        firstFlightStart[0] + (firstFlightDir[0] * ((stepsFirstFlight + 1) * stepDepth) + (secondFlightDir[0] * stepWidth / 2) + (secondFlightDir[0] * stepDepth / 2)),
        firstFlightStart[1] + (stepsFirstFlight + 1) * stepHeight,
        firstFlightStart[2] + (firstFlightDir[2] * ((stepsFirstFlight + 1) * stepDepth) + (secondFlightDir[2] * stepWidth / 2) + (secondFlightDir[2] * stepDepth / 2))
    ];

    // Second landing
    const secondLandingPos = [
        secondFlightStart[0] + (secondFlightDir[0] * (stepsSecondFlight + 1) * stepDepth),
        secondFlightStart[1] + (stepsSecondFlight) * stepHeight,
        secondFlightStart[2] + (secondFlightDir[2] * (stepsSecondFlight + 1) * stepDepth)
    ];

    // Third flight (forward again)
    const thirdFlightDir = [0, 0, -1];
    const thirdFlightStart = [
        secondFlightStart[0] + (secondFlightDir[0] * (stepsSecondFlight + 1) * stepDepth + (thirdFlightDir[0] * stepWidth / 2) + (thirdFlightDir[0] * stepDepth / 2)),
        secondFlightStart[1] + (stepsSecondFlight + 1) * stepHeight,
        secondFlightStart[2] + (secondFlightDir[2] * (stepsSecondFlight + 1) * stepDepth + (thirdFlightDir[2] * stepWidth / 2) + (thirdFlightDir[2] * stepDepth / 2))
    ];

    return (
        <>
            {/* First flight */}
            <Flight
                steps={stepsFirstFlight}
                stepHeight={stepHeight}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={firstFlightStart}
                direction={firstFlightDir}
            />
            <Landing castShadow position={firstLandingPos} width={stepWidth} height={stepThickness} depth={stepWidth} />

            {/* Second flight */}
            <Flight
                steps={stepsSecondFlight}
                stepHeight={stepHeight}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={secondFlightStart}
                direction={secondFlightDir}
            />
            <Landing castShadow position={secondLandingPos} width={stepWidth} height={stepThickness} depth={stepWidth} />

            {/* Third flight */}
            <Flight
                steps={stepsThirdFlight}
                stepThickness={stepThickness}
                stepHeight={stepHeight}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={thirdFlightStart}
                direction={thirdFlightDir}
            />
        </>
    );
}

