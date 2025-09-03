'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// Removed drei imports to avoid compatibility issues
// THREE import removed as not needed for basic geometries

// Circuit Board Component
function Circuit({ position = [0, 0, 0] }) {
  const groupRef = useRef()
  const circuitRef = useRef()
  const pulseRef = useRef()

  // Generate circuit data
  const circuitData = useMemo(() => {
    const components = []
    const traces = []
    const chips = []

    // Generate circuit traces (pathways)
    const traceCount = 15
    for (let i = 0; i < traceCount; i++) {
      const isHorizontal = Math.random() > 0.5
      traces.push({
        position: isHorizontal 
          ? [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, 0.01]
          : [(Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8, 0.01],
        size: isHorizontal 
          ? [Math.random() * 3 + 1, 0.05, 0.02]
          : [0.05, Math.random() * 3 + 1, 0.02],
        color: "#10b981",
        glowIntensity: Math.random() * 0.5 + 0.3
      })
    }

    // Generate electronic components
    const componentCount = 12
    for (let i = 0; i < componentCount; i++) {
      components.push({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          0.1
        ],
        size: [
          Math.random() * 0.3 + 0.1,
          Math.random() * 0.3 + 0.1,
          Math.random() * 0.2 + 0.05
        ],
        color: i % 3 === 0 ? "#059669" : i % 3 === 1 ? "#34d399" : "#10b981",
        type: Math.floor(Math.random() * 3) // 0: resistor, 1: capacitor, 2: chip
      })
    }

    // Generate microchips
    const chipCount = 4
    for (let i = 0; i < chipCount; i++) {
      chips.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          0.15
        ],
        size: [0.8, 0.8, 0.1],
        color: "#1f2937",
        pins: []
      })

      // Add pins to chips
      const chip = chips[chips.length - 1]
      for (let j = 0; j < 16; j++) {
        const side = Math.floor(j / 4)
        const pinIndex = j % 4
        let pinPos = [0, 0, 0]
        
        switch (side) {
          case 0: // top
            pinPos = [chip.position[0] + (pinIndex - 1.5) * 0.15, chip.position[1] + 0.45, chip.position[2]]
            break
          case 1: // right
            pinPos = [chip.position[0] + 0.45, chip.position[1] + (pinIndex - 1.5) * 0.15, chip.position[2]]
            break
          case 2: // bottom
            pinPos = [chip.position[0] + (pinIndex - 1.5) * 0.15, chip.position[1] - 0.45, chip.position[2]]
            break
          case 3: // left
            pinPos = [chip.position[0] - 0.45, chip.position[1] + (pinIndex - 1.5) * 0.15, chip.position[2]]
            break
        }
        
        chip.pins.push({
          position: pinPos,
          size: [0.05, 0.05, 0.08]
        })
      }
    }

    return { components, traces, chips }
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }

    if (circuitRef.current) {
      circuitRef.current.children.forEach((child, i) => {
        if (child.userData.isTrace) {
          // Pulsing traces
          const intensity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.2
          if (child.material) {
            child.material.emissiveIntensity = intensity
          }
        }
      })
    }

    if (pulseRef.current) {
      pulseRef.current.children.forEach((pulse, i) => {
        // Moving pulses along traces
        const speed = 2
        const progress = (state.clock.elapsedTime * speed + i) % 4 - 2
        pulse.position.x = progress
        
        const opacity = 1 - Math.abs(progress) / 2
        if (pulse.material) {
          pulse.material.opacity = Math.max(0, opacity)
        }
      })
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Circuit Board Base */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[8, 6, 0.1]} />
        <meshStandardMaterial
          color="#1f2937"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {/* Circuit Elements */}
      <group ref={circuitRef}>
        {/* Circuit Traces */}
        {circuitData.traces.map((trace, i) => (
          <mesh
            key={`trace-${i}`}
            position={trace.position}
          >
            <boxGeometry args={trace.size} />
            <meshStandardMaterial
              color={trace.color}
              emissive={trace.color}
              emissiveIntensity={trace.glowIntensity}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}

        {/* Electronic Components */}
        {circuitData.components.map((component, i) => (
          <mesh key={`component-${i}`} position={component.position}>
            {component.type === 0 ? (
              // Resistor
              <cylinderGeometry args={[0.05, 0.05, component.size[1], 8]} />
            ) : component.type === 1 ? (
              // Capacitor
              <cylinderGeometry args={[0.08, 0.08, component.size[2], 8]} />
            ) : (
              // Generic component
              <boxGeometry args={component.size} />
            )}
            <meshStandardMaterial
              color={component.type === 0 ? "#8b5cf6" : component.type === 1 ? "#f59e0b" : component.color}
              emissive={component.type === 2 ? component.color : "#000000"}
              emissiveIntensity={component.type === 2 ? 0.2 : 0}
            />
          </mesh>
        ))}

        {/* Microchips */}
        {circuitData.chips.map((chip, i) => (
          <group key={`chip-${i}`}>
            <mesh position={chip.position}>
              <boxGeometry args={chip.size} />
              <meshStandardMaterial
                color={chip.color}
                roughness={0.3}
                metalness={0.7}
              />
            </mesh>

            {/* Chip pins */}
            {chip.pins.map((pin, j) => (
              <mesh key={`pin-${i}-${j}`} position={pin.position}>
                <boxGeometry args={pin.size} />
                <meshStandardMaterial
                  color="#c0c0c0"
                  metalness={1}
                  roughness={0.1}
                />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Moving Data Pulses */}
      <group ref={pulseRef}>
        {Array.from({ length: 5 }, (_, i) => (
          <mesh key={`pulse-${i}`}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial
              color="#34d399"
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

// Main Component
export default function CircuitBoard({ className = "" }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#10b981" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#059669" />
        <spotLight position={[0, 10, 5]} intensity={0.8} color="#34d399" />
        
        <Circuit />
      </Canvas>
    </div>
  )
}
