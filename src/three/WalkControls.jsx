import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'

export default function WalkControls() {
  const { camera } = useThree()
  const [, get] = useKeyboardControls()
  
  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())
  const speed = useRef(5)
  const isOnGround = useRef(true)

  useEffect(() => {
    // Set initial camera position (inside the house)
    camera.position.set(0, 1.8, 0)
  }, [camera])

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward, jump, run } = get()
    
    // Calculate movement vectors
    frontVector.current.set(0, 0, Number(backward) - Number(forward))
    sideVector.current.set(Number(leftward) - Number(rightward), 0, 0)
    
    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(run ? speed.current * 2 : speed.current)
      .applyEuler(camera.rotation)

    // Apply movement
    velocity.current.x = direction.current.x
    velocity.current.z = direction.current.z
    
    // Handle jumping
    if (jump && isOnGround.current) {
      velocity.current.y = 8
      isOnGround.current = false
    }
    
    // Apply gravity
    if (!isOnGround.current) {
      velocity.current.y -= 25 * delta // gravity
    }
    
    // Update camera position
    camera.position.addScaledVector(velocity.current, delta)
    
    // Ground collision (simple floor at y = 1.8)
    if (camera.position.y <= 1.8) {
      camera.position.y = 1.8
      velocity.current.y = 0
      isOnGround.current = true
    }
    
    // Wall collision detection (keep inside house bounds)
    const bounds = 3.5 // slightly inside the house walls
    camera.position.x = Math.max(-bounds, Math.min(bounds, camera.position.x))
    camera.position.z = Math.max(-2.5, Math.min(2.5, camera.position.z))
    
    // Prevent going through the door when it's closed (optional)
    if (camera.position.z > 2.5 && Math.abs(camera.position.x) < 0.5) {
      // Allow exit through door opening
      camera.position.z = Math.min(camera.position.z, 4)
    }
  })

  return null
}