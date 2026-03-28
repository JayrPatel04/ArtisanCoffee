'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Fallback coffee cup geometry
function CoffeeCupFallback({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (meshRef.current) {
      // Scale based on scroll
      const scale = 1 + scrollProgress * 0.5
      meshRef.current.scale.set(scale, scale, scale)

      // Rotate based on scroll
      meshRef.current.rotation.y = scrollProgress * Math.PI * 2
      meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.2
    }
  })

  return (
    <group ref={meshRef}>
      {/* Cup body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1, 1.5, 32]} />
        <meshStandardMaterial color="#8B4513" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Coffee inside */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.2, 32]} />
        <meshStandardMaterial color="#3E2723" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* Handle */}
      <mesh position={[1.2, 0, 0]}>
        <torusGeometry args={[0.3, 0.1, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#8B4513" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Saucer */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.4} metalness={0.05} />
      </mesh>
    </group>
  )
}

function CoffeeCup({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)

  try {
    const { scene } = useGLTF('/assets/models/cup.glb')

    useEffect(() => {
      if (scene) {
        setModelLoaded(true)
        // Center and scale the model if needed
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
      }
    }, [scene])

    useFrame(() => {
      if (meshRef.current) {
        // Scale based on scroll
        const scale = 1 + scrollProgress * 0.5
        meshRef.current.scale.set(scale, scale, scale)

        // Rotate based on scroll
        meshRef.current.rotation.y = scrollProgress * Math.PI * 2
        meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.2
      }
    })

    return (
      <group ref={meshRef}>
        <primitive object={scene} />
      </group>
    )
  } catch (error) {
    console.error('Error loading 3D model:', error)
    return <CoffeeCupFallback scrollProgress={scrollProgress} />
  }
}

export default function HeroScene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        className="w-full h-full"
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.8} color="#fff8e7" />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          color="#ffffff"
          castShadow
        />
        <spotLight
          position={[0, 15, 0]}
          angle={0.5}
          penumbra={1}
          intensity={1.5}
          color="#d9b78c"
        />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#f6eedc"
        />

        {/* Environment for reflections */}
        <Environment preset="studio" />

        {/* 3D Model */}
        <CoffeeCup scrollProgress={scrollProgress} />

        {/* Subtle controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
