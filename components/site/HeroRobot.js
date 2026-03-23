"use client";

import { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, useAnimations, useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

function RobotModel() {
  const { scene, animations } = useGLTF("/models/hero_dance.glb");
  const { actions } = useAnimations(animations, scene);

  const transform = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = 3.35 / maxDimension;

    return {
      scale,
      position: [-center.x * scale, -center.y * scale - 1.15, -center.z * scale],
    };
  }, [scene]);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.reset().fadeIn(0.4).play();
    });

    return () => {
      Object.values(actions).forEach((action) => action?.fadeOut(0.25));
    };
  }, [actions]);

  return (
    <group scale={transform.scale} position={transform.position}>
      <primitive object={scene} />
    </group>
  );
}

export default function HeroRobot() {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-x-[10%] top-[14%] h-[58%] rounded-full bg-[#8A5CF5]/25 blur-3xl" />
      <Canvas camera={{ position: [0, 0.55, 10.4], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 5, 4]} intensity={2.4} />
        <directionalLight position={[-3, 2, 1]} intensity={0.85} color="#8A5CF5" />
        <pointLight position={[0, 1.5, 2]} intensity={1.1} color="#b49aff" />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.04} floatIntensity={0.28}>
            <RobotModel />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
