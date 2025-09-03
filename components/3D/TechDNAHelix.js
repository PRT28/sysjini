'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// DNA Helix Component
function DNAHelix({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const helixRef = useRef()

  // Generate helix points
  const helixData = useMemo(() => {
    const points = []
    const connections = []
    const height = 8
    const radius = 1.5
    const turns = 3
    const pointsPerTurn = 20

    for (let i = 0; i < turns * pointsPerTurn; i++) {
      const angle = (i / pointsPerTurn) * Math.PI * 2
      const y = (i / (turns * pointsPerTurn)) * height - height / 2
      
      // First strand
      points.push({
        position: [
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ],
        color: "#10b981",
        strand: 0
      })

      // Second strand (opposite)
      points.push({
        position: [
          Math.cos(angle + Math.PI) * radius,
          y,
          Math.sin(angle + Math.PI) * radius
        ],
        color: "#059669",
        strand: 1
      })

      // Connections between strands
      if (i % 3 === 0) {
        connections.push({
          start: [Math.cos(angle) * radius, y, Math.sin(angle) * radius],
          end: [Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius],
          color: "#34d399"
        })
      }
    }

    return { points, connections }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    
    if (helixRef.current) {
      helixRef.current.children.forEach((child, i) => {
        if (child.userData.isPoint) {
          child.position.y += Math.sin(state.clock.elapsedTime * 2 + i * 0.1) * 0.01
          child.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3 + i * 0.2) * 0.1)
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <group ref={helixRef}>
        {/* DNA Points */}
        {helixData.points.map((point, i) => (
          <mesh
            key={`point-${i}`}
            position={point.position}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={point.color}
              emissive={point.color}
              emissiveIntensity={0.3}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* DNA Connections */}
        {helixData.connections.map((connection, i) => {
          const start = new THREE.Vector3(...connection.start)
          const end = new THREE.Vector3(...connection.end)
          const distance = start.distanceTo(end)
          const center = start.clone().add(end).multiplyScalar(0.5)

          return (
            <mesh
              key={`connection-${i}`}
              position={center.toArray()}
              rotation={[0, 0, Math.atan2(end.z - start.z, end.x - start.x)]}
            >
              <cylinderGeometry args={[0.02, 0.02, distance, 8]} />
              <meshStandardMaterial
                color={connection.color}
                emissive={connection.color}
                emissiveIntensity={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
          )
        })}
      </group>

      {/* Surrounding Energy Field */}
      <mesh>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}

// Main Component
export default function TechDNAHelix({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#10b981" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#059669" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#34d399" />
        
        <DNAHelix />
      </Canvas>
    </div>
  )
}
