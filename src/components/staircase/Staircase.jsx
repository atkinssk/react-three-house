// Staircase.jsx
import React from "react";
import { useMemo } from 'react'
import * as THREE from 'three'

function Step({ position, size }) {
    return (
        <mesh position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial color="lightgray" />
        </mesh>
    );
}

function Flight({ steps, stepRise, stepGoing, stepThickness, stepDepth, stepWidth, startPos, direction }) {
    const meshes = [];

    for (let i = 0; i < steps; i++) {
        const x = startPos[0] + (direction[0] * i * stepGoing);
        const y = startPos[1] + i * stepRise;
        const z = startPos[2] + (direction[2] * i * stepGoing);

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

function TriStep({ points, position, depth, color = 'gray' }) {
    const geometry = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(...points[0]);
        shape.lineTo(...points[1]);
        shape.lineTo(...points[2]);
        shape.lineTo(...points[0]);

        return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
    }, [points, depth]);

    return (
        <mesh geometry={geometry} position={position}>
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

function TrapStep({ points, position, depth, color = 'gray' }) {
    const geometry = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(...points[0]);
        shape.lineTo(...points[1]);
        shape.lineTo(...points[2]);
        shape.lineTo(...points[3]);
        shape.lineTo(...points[0]);

        return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
    }, [points, depth]);

    return (
        <mesh geometry={geometry} position={position}>
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

function ThreeStepWinder({ position, width, depth, rising, rotation = 0 }) {
    const halfWidth = width / 2;
    const halfDepth = depth / 2
    return <mesh position={position} rotation={[-Math.PI / 2, 0, rotation]}>
        <TriStep
            position={[-halfWidth, -halfWidth, -halfDepth + rising * 2]}
            points={[[0, 0], [width, 0], [width, width / 2]]}
            depth={depth}
            color="red" />
        <TrapStep
            position={[-halfWidth, -halfWidth, -halfDepth + rising]}
            points={[[0, 0], [width, width / 2], [width, width], [width / 2, width]]}
            depth={depth}
            color="green" />
        <TriStep
            position={[-halfWidth, -halfWidth, -halfDepth]}
            points={[[0, 0], [width / 2, width], [0, width]]}
            depth={depth}
            color="blue" />
    </mesh>
}

// Rise: The height of each step must be between 150 mm and 220 mm, and this must be consistent throughout the staircase.
// Going: The depth of each step must be a minimum of 220 and a maximum of 300 mm.
// Width: There is no minimum width for domestic staircases, but 750 mm is often cited for loft conversions, and 800 mm for main staircases. Public and fire-escape staircases have stricter width requirements. 

const stepRise = 0.175; // Current stairs are 175
const stepGoing = 0.250
const stepThickness = 0.05;
const stepDepth = 0.3;
const stepWidth = 0.90; // Current stairs are 990

export function Staircase4() {

    const stepsFirstFlight = 4;
    const stepsSecondFlight = 4;
    const stepsThirdFlight = 3;

    const startPosition = [0, 0, 0];

    // First flight
    const firstFlightStart = [0, stepRise, 0];
    const firstFlightDir = [0, 0, 1]; // forward

    // First landing
    const firstLandingPos = [
        firstFlightStart[0] + (firstFlightDir[0] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing)),
        firstFlightStart[1] + (stepsFirstFlight) * stepRise,
        firstFlightStart[2] + (firstFlightDir[2] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
    ];

    // Second flight (to the left)
    const secondFlightDir = [-1, 0, 0]; // sideways
    const secondFlightStart = [
        firstLandingPos[0] + (secondFlightDir[0] * stepWidth / 2) + (secondFlightDir[0] * stepGoing / 2),
        firstLandingPos[1] + stepRise * 3,
        firstLandingPos[2] + (secondFlightDir[2] * stepWidth / 2) + (secondFlightDir[2] * stepGoing / 2)
    ];

    // Second landing
    const secondLandingPos = [
        secondFlightStart[0] + (secondFlightDir[0] * (stepWidth / 2 + (stepsSecondFlight - 0.5) * stepGoing)),
        secondFlightStart[1] + (stepsSecondFlight) * stepRise,
        secondFlightStart[2] + (secondFlightDir[2] * (stepWidth / 2 + (stepsSecondFlight - 0.5) * stepGoing))
    ];

    // Third flight (forward again)
    const thirdFlightDir = [0, 0, -1];
    const thirdFlightStart = [
        secondLandingPos[0] + (thirdFlightDir[0] * stepWidth / 2) + (thirdFlightDir[0] * stepGoing / 2),
        secondLandingPos[1] + stepRise * 3,
        secondLandingPos[2] + (thirdFlightDir[2] * stepWidth / 2) + (thirdFlightDir[2] * stepGoing / 2)
    ];

    return (
        <mesh position={startPosition}>

            {/* First flight */}
            <Flight
                steps={stepsFirstFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={firstFlightStart}
                direction={firstFlightDir}
            />
            <ThreeStepWinder
                position={firstLandingPos}
                width={stepWidth}
                depth={stepThickness}
                rising={stepRise}
                rotation={-Math.PI / 2} />

            {/* Second flight */}
            <Flight
                steps={stepsSecondFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={secondFlightStart}
                direction={secondFlightDir}
            />
            <ThreeStepWinder
                position={secondLandingPos}
                width={stepWidth}
                depth={stepThickness}
                rising={stepRise}
                rotation={Math.PI} />

            {/* Third flight */}
            <Flight
                steps={stepsThirdFlight}
                stepThickness={stepThickness}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={thirdFlightStart}
                direction={thirdFlightDir}
            />
        </mesh>
    );

}

export function Staircase3() {

    const stepsFirstFlight = 6;
    const stepsSecondFlight = 4;
    const stepsThirdFlight = 4;

    const startPosition = [-0.08, 0, -0.27];

    // First flight
    const firstFlightStart = [0, stepRise, 0];
    const firstFlightDir = [0, 0, 1]; // forward

    // First landing
    const firstLandingPos = [
        firstFlightStart[0] + (firstFlightDir[0] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing)),
        firstFlightStart[1] + (stepsFirstFlight) * stepRise,
        firstFlightStart[2] + (firstFlightDir[2] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
    ];

    // Second flight (to the left)
    const secondFlightDir = [-1, 0, 0]; // sideways
    const secondFlightStart = [
        firstLandingPos[0] + (secondFlightDir[0] * stepWidth / 2) + (secondFlightDir[0] * stepGoing / 2),
        firstLandingPos[1] + stepRise,
        firstLandingPos[2] + (secondFlightDir[2] * stepWidth / 2) + (secondFlightDir[2] * stepGoing / 2)
    ];

    // Second landing
    const secondLandingPos = [
        secondFlightStart[0] + (secondFlightDir[0] * (stepWidth / 2 + (stepsSecondFlight - 0.5) * stepGoing)),
        secondFlightStart[1] + (stepsSecondFlight) * stepRise,
        secondFlightStart[2] + (secondFlightDir[2] * (stepWidth / 2 + (stepsSecondFlight - 0.5) * stepGoing))
    ];

    // Third flight (forward again)
    const thirdFlightDir = [0, 0, -1];
    const thirdFlightStart = [
        secondLandingPos[0] + (thirdFlightDir[0] * stepWidth / 2) + (thirdFlightDir[0] * stepGoing / 2),
        secondLandingPos[1] + stepRise,
        secondLandingPos[2] + (thirdFlightDir[2] * stepWidth / 2) + (thirdFlightDir[2] * stepGoing / 2)
    ];

    return (
        <mesh position={startPosition}>

            {/* First flight */}
            <Flight
                steps={stepsFirstFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
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
                stepRise={stepRise}
                stepGoing={stepGoing}
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
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={thirdFlightStart}
                direction={thirdFlightDir}
            />
        </mesh>
    );
}

export function Staircase2a() {
    const stepsFirstFlight = 8;
    const stepsSecondFlight = 8;

    const startPosition = [0.35, 0, 1.5];

    // First flight
    const firstFlightStart = [0, stepRise, 0];
    const firstFlightDir = [-1, 0, 0]; // forward

    // First landing
    const firstLandingPos = [
        firstFlightStart[0]
        + (firstFlightDir[0] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
        + firstFlightDir[2] * stepWidth / 2,
        firstFlightStart[1] + (stepsFirstFlight) * stepRise,
        firstFlightStart[2]
        + (firstFlightDir[2] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
        + firstFlightDir[0] * stepWidth / 2
    ];

    // Second flight (forward again)
    const secondFlightDir = [1, 0, 0];
    const secondFlightStart = [
        firstLandingPos[0]
        + (secondFlightDir[0] * stepWidth / 2) + (secondFlightDir[0] * stepGoing / 2)
        + firstFlightDir[2] * stepWidth / 2,
        firstLandingPos[1] + stepRise,
        firstLandingPos[2]
        + (secondFlightDir[2] * stepWidth / 2) + (secondFlightDir[2] * stepGoing / 2)
        + firstFlightDir[0] * stepWidth / 2
    ];

    return (
        <mesh position={startPosition}>
            {/* First flight */}
            <Flight
                steps={stepsFirstFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={firstFlightStart}
                direction={firstFlightDir}
            />
            <Landing castShadow position={firstLandingPos} width={stepWidth} height={stepThickness} depth={stepWidth * 2} />
            {/* Second flight */}
            <Flight
                steps={stepsSecondFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={secondFlightStart}
                direction={secondFlightDir}
            />
        </mesh>
    );
}

export function Staircase2b1() {
    return Staircase2b({
        stepRise: 0.175,
        stepGoing: 0.250,
        stepsFirstFlight: 7,
        stepsSecondFlight: 9,
        startPosition: [-2, 0, 1.5]
    });
}

export function Staircase2b2() {
    return Staircase2b({
        stepRise: 0.2,
        stepGoing: 0.250,
        stepsFirstFlight: 4,
        stepsSecondFlight: 9,
        startPosition: [-1.3, 0, 1.5]

    });
}

function Staircase2b({
    stepRise,
    stepGoing,
    stepsFirstFlight,
    stepsSecondFlight,
    startPosition
}) {
    // First flight
    const firstFlightStart = [0, stepRise, 0];
    const firstFlightDir = [1, 0, 0]; // forward

    // First landing
    const firstLandingPos = [
        firstFlightStart[0]
        + (firstFlightDir[0] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
        - firstFlightDir[2] * stepWidth / 2,
        firstFlightStart[1] + (stepsFirstFlight) * stepRise,
        firstFlightStart[2]
        + (firstFlightDir[2] * (stepWidth / 2 + (stepsFirstFlight - 0.5) * stepGoing))
        - firstFlightDir[0] * stepWidth / 2
    ];

    // Second flight (forward again)
    const secondFlightDir = [-1, 0, 0];
    const secondFlightStart = [
        firstLandingPos[0]
        + (secondFlightDir[0] * stepWidth / 2) + (secondFlightDir[0] * stepGoing / 2)
        - firstFlightDir[2] * stepWidth / 2,
        firstLandingPos[1] + stepRise,
        firstLandingPos[2]
        + (secondFlightDir[2] * stepWidth / 2) + (secondFlightDir[2] * stepGoing / 2)
        - firstFlightDir[0] * stepWidth / 2
    ];

    return (
        <mesh position={startPosition}>
            {/* First flight */}
            <Flight
                steps={stepsFirstFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={firstFlightStart}
                direction={firstFlightDir}
            />
            <Landing castShadow position={firstLandingPos} width={stepWidth} height={stepThickness} depth={stepWidth * 2} />
            {/* Second flight */}
            <Flight
                steps={stepsSecondFlight}
                stepRise={stepRise}
                stepGoing={stepGoing}
                stepThickness={stepThickness}
                stepDepth={stepDepth}
                stepWidth={stepWidth}
                startPos={secondFlightStart}
                direction={secondFlightDir}
            />
        </mesh>
    );
}