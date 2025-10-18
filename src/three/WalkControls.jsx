import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'

export default function WalkControls({ collisionEnabled = true }) {
  const { camera, gl } = useThree()
  const [, get] = useKeyboardControls()

  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())
  const speed = useRef(5)
  const isOnGround = useRef(true)

  // Touch controls state
  const [touchControls, setTouchControls] = useState({
    forward: false,
    backward: false,
    leftward: false,
    rightward: false,
    jump: false,
    run: false,
    rotateLeft: false,
    rotateRight: false
  })

  // Touch tracking
  const touchStart = useRef({ x: 0, y: 0 })
  const touchCurrent = useRef({ x: 0, y: 0 })
  const isTouching = useRef(false)

  useEffect(() => {
    // Set initial camera position (inside the house)
    camera.position.set(0, 1.8, 0)
    // Ensure camera starts with horizontal rotation only
    camera.rotation.set(0, 0, 0)

    // Touch event handlers
    const handleTouchStart = (event) => {
      event.preventDefault()
      const touch = event.touches[0]
      touchStart.current = { x: touch.clientX, y: touch.clientY }
      touchCurrent.current = { x: touch.clientX, y: touch.clientY }
      isTouching.current = true
    }

    const handleTouchMove = (event) => {
      event.preventDefault()
      if (!isTouching.current) return

      const touch = event.touches[0]
      touchCurrent.current = { x: touch.clientX, y: touch.clientY }

      const deltaX = touchCurrent.current.x - touchStart.current.x
      const deltaY = touchCurrent.current.y - touchStart.current.y

      // Movement threshold
      const threshold = 30
      const rotationThreshold = 15

      // Reset all touch controls
      const newControls = {
        forward: false,
        backward: false,
        leftward: false,
        rightward: false,
        jump: false,
        run: false,
        rotateLeft: false,
        rotateRight: false
      }

      // Determine if this is primarily a horizontal or vertical gesture
      const isHorizontalGesture = Math.abs(deltaX) > Math.abs(deltaY)

      if (isHorizontalGesture) {
        // Horizontal movement - rotation and strafing
        if (Math.abs(deltaX) > rotationThreshold) {
          if (deltaX < -rotationThreshold) {
            newControls.rotateLeft = true
          } else if (deltaX > rotationThreshold) {
            newControls.rotateRight = true
          }
        }

        // Also allow strafing for large horizontal movements
        if (Math.abs(deltaX) > threshold) {
          if (deltaX < -threshold) {
            newControls.leftward = true
          } else if (deltaX > threshold) {
            newControls.rightward = true
          }
        }
      } else {
        // Vertical movement (forward/backward)
        if (Math.abs(deltaY) > threshold) {
          if (deltaY < -threshold) {
            newControls.forward = true
          } else if (deltaY > threshold) {
            newControls.backward = true
          }
        }
      }

      // Running (large movements)
      if (Math.abs(deltaX) > threshold * 1.5 || Math.abs(deltaY) > threshold * 1.5) {
        newControls.run = true
      }

      setTouchControls(newControls)
    }

    const handleTouchEnd = (event) => {
      event.preventDefault()
      isTouching.current = false

      // Check for tap (jump)
      const deltaX = Math.abs(touchCurrent.current.x - touchStart.current.x)
      const deltaY = Math.abs(touchCurrent.current.y - touchStart.current.y)

      if (deltaX < 10 && deltaY < 10) {
        // This was a tap, trigger jump
        setTouchControls(prev => ({ ...prev, jump: true }))
        setTimeout(() => {
          setTouchControls(prev => ({ ...prev, jump: false }))
        }, 100)
      } else {
        // Reset all movement controls
        setTouchControls({
          forward: false,
          backward: false,
          leftward: false,
          rightward: false,
          jump: false,
          run: false,
          rotateLeft: false,
          rotateRight: false
        })
      }
    }

    // Add touch event listeners to the canvas
    const canvas = gl.domElement
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false })
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false })

    // Cleanup
    return () => {
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchmove', handleTouchMove)
      canvas.removeEventListener('touchend', handleTouchEnd)
    }
  }, [camera, gl])

  useFrame((_, delta) => {
    // Get keyboard controls
    const keyboardControls = get()

    // Combine keyboard and touch controls
    const controls = {
      forward: keyboardControls.forward || touchControls.forward,
      backward: keyboardControls.backward || touchControls.backward,
      leftward: keyboardControls.leftward || touchControls.leftward,
      rightward: keyboardControls.rightward || touchControls.rightward,
      jump: keyboardControls.jump || touchControls.jump,
      run: keyboardControls.run || touchControls.run,
      rotateLeft: keyboardControls.rotateLeft || touchControls.rotateLeft,
      rotateRight: keyboardControls.rotateRight || touchControls.rotateRight
    }

    // Handle rotation - keep in horizontal plane only
    if (controls.rotateLeft) {
      camera.rotation.y += 2 * delta // rotate left
    }
    if (controls.rotateRight) {
      camera.rotation.y -= 2 * delta // rotate right
    }

    // Constrain camera rotation to horizontal plane only
    camera.rotation.x = 0 // No pitch
    camera.rotation.z = 0 // No roll

    // Calculate movement vectors
    frontVector.current.set(0, 0, Number(controls.backward) - Number(controls.forward))
    sideVector.current.set(Number(controls.leftward) - Number(controls.rightward), 0, 0)

    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(controls.run ? speed.current * 2 : speed.current)
      .applyEuler(camera.rotation)

    // Apply movement
    velocity.current.x = direction.current.x
    velocity.current.z = direction.current.z

    // Handle jumping
    if (controls.jump && isOnGround.current) {
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
    if (collisionEnabled) {
      const bounds = 3.5 // slightly inside the house walls
      camera.position.x = Math.max(-bounds, Math.min(bounds, camera.position.x))
      camera.position.z = Math.max(-2.5, Math.min(2.5, camera.position.z))

      // Prevent going through the door when it's closed (optional)
      if (camera.position.z > 2.5 && Math.abs(camera.position.x) < 0.5) {
        // Allow exit through door opening
        camera.position.z = Math.min(camera.position.z, 4)
      }
    }
  })

  return null
}