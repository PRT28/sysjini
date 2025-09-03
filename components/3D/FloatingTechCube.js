'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Animated Tech Cube Component
function TechCube({ position = [0, 0, 0] }) {
  const meshRef = useRef()
  const particlesRef = useRef()

  // Create particles around the cube
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        scale: Math.random() * 0.1 + 0.05
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1
    }

    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
        particle.rotation.x += 0.02
        particle.rotation.y += 0.02
      })
    }
  })

  return (
    <group position={position}>
      {/* Main Tech Cube */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#10b981"
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Orbiting Elements */}
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[particle.scale, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#059669" : "#34d399"}
              emissive={i % 2 === 0 ? "#059669" : "#34d399"}
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Wireframe Torus */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshBasicMaterial color="#10b981" wireframe />
      </mesh>

      {/* Inner Rotating Ring */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 8, 50]} />
        <meshBasicMaterial color="#34d399" wireframe />
      </mesh>
    </group>
  )
}

// Main Component
export default function FloatingTechCube({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />
        
        <TechCube />
      </Canvas>
    </div>
  )
}
