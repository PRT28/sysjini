'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// THREE import removed as not needed for basic geometries

// Holographic Code Component
function Holographic({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const codeRef = useRef()

  // Generate floating elements
  const codeData = useMemo(() => {
    const elements = []

    // Create floating geometric shapes representing code
    for (let i = 0; i < 30; i++) {
      elements.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4
        ],
        color: i % 3 === 0 ? "#10b981" : i % 3 === 1 ? "#059669" : "#34d399",
        opacity: 0.3 + Math.random() * 0.4,
        size: Math.random() * 0.2 + 0.1,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: Math.random() * 2 + 1,
        shape: Math.floor(Math.random() * 3) // 0: box, 1: sphere, 2: octahedron
      })
    }

    return elements
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }

    if (codeRef.current) {
      codeRef.current.children.forEach((element, i) => {
        const data = codeData[i]
        if (data) {
          // Floating movement
          element.position.y += Math.sin(state.clock.elapsedTime * data.floatSpeed + i) * 0.01
          element.rotation.z += data.rotationSpeed

          // Pulsing opacity
          const opacity = data.opacity + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2
          if (element.material) {
            element.material.opacity = Math.max(0.1, opacity)
          }
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <group ref={codeRef}>
        {codeData.map((item, i) => {
          const args = item.shape === 0 ? [item.size, item.size, item.size] :
                      item.shape === 1 ? [item.size, 16, 16] : [item.size]

          return (
            <mesh key={`code-${i}`} position={item.position}>
              {item.shape === 0 && <boxGeometry args={args} />}
              {item.shape === 1 && <sphereGeometry args={args} />}
              {item.shape === 2 && <octahedronGeometry args={args} />}
              <meshBasicMaterial
                color={item.color}
                transparent
                opacity={item.opacity}
              />
            </mesh>
          )
        })}
      </group>

      {/* Holographic Frame */}
      <mesh position={[0, 0, -2]}>
        <boxGeometry args={[10, 8, 0.1]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Scanning Lines */}
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[12, 0.05, 0.05]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[0.05, 10, 0.05]} />
        <meshBasicMaterial
          color="#34d399"
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  )
}

// Main Component
export default function HolographicCode({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#10b981" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#059669" />
        
        <Holographic />
      </Canvas>
    </div>
  )
}
