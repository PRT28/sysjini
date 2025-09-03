'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Network Nodes Component
function Nodes({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const nodesRef = useRef()
  const connectionsRef = useRef()

  // Generate network data
  const networkData = useMemo(() => {
    const nodes = []
    const connections = []
    const nodeCount = 15
    const maxDistance = 3

    // Generate random nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ],
        size: Math.random() * 0.1 + 0.05,
        color: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#059669" : "#34d399",
        pulseSpeed: Math.random() * 2 + 1
      })
    }

    // Generate connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = new THREE.Vector3(...nodes[i].position)
          .distanceTo(new THREE.Vector3(...nodes[j].position))
        
        if (distance < maxDistance) {
          connections.push({
            start: nodes[i].position,
            end: nodes[j].position,
            opacity: 1 - (distance / maxDistance),
            color: "#10b981"
          })
        }
      }
    }

    return { nodes, connections }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }

    if (nodesRef.current) {
      nodesRef.current.children.forEach((node, i) => {
        const nodeData = networkData.nodes[i]
        if (nodeData) {
          // Pulsing effect
          const scale = 1 + Math.sin(state.clock.elapsedTime * nodeData.pulseSpeed) * 0.3
          node.scale.setScalar(scale)
          
          // Floating movement
          node.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002
          node.position.x += Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.001
        }
      })
    }

    if (connectionsRef.current) {
      connectionsRef.current.children.forEach((connection, i) => {
        const opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.2
        if (connection.material) {
          connection.material.opacity = Math.max(0.1, opacity)
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Network Nodes */}
      <group ref={nodesRef}>
        {networkData.nodes.map((node, i) => (
          <mesh key={`node-${i}`} position={node.position}>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Network Connections */}
      <group ref={connectionsRef}>
        {networkData.connections.map((connection, i) => {
          const start = new THREE.Vector3(...connection.start)
          const end = new THREE.Vector3(...connection.end)
          const distance = start.distanceTo(end)
          const center = start.clone().add(end).multiplyScalar(0.5)

          return (
            <mesh
              key={`connection-${i}`}
              position={center.toArray()}
              lookAt={end}
            >
              <cylinderGeometry args={[0.01, 0.01, distance, 8]} />
              <meshBasicMaterial
                color={connection.color}
                transparent
                opacity={connection.opacity * 0.5}
              />
            </mesh>
          )
        })}
      </group>

      {/* Central Hub */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.6}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#059669"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

// Main Component
export default function NetworkNodes({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#059669" />
        
        <Nodes />
      </Canvas>
    </div>
  )
}
