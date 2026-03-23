"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";

function SatelliteModel() {
  const { scene } = useGLTF("/models/space_station.glb");

  const normalizedScene = useMemo(() => {
    const clonedScene = scene.clone(true);
    const box = new Box3().setFromObject(clonedScene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = 4.3 / maxDimension;

    clonedScene.position.sub(center);
    clonedScene.position.y += 0.18;
    clonedScene.scale.setScalar(scale);

    const group = new Group();
    group.add(clonedScene);
    return group;
  }, [scene]);

  return <primitive object={normalizedScene} />;
}

export default function ContactSatellite() {
  return (
    <div className="relative h-[380px] w-full md:h-[340px] lg:h-[500px]">
      <div className="pointer-events-none absolute inset-x-[16%] top-[18%] h-[42%] rounded-full bg-[#8A5CF5]/20 blur-3xl" />
      <Canvas camera={{ position: [0, 0, -1.0], fov: 12 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 6, 4]} intensity={1.8} />
        <pointLight position={[-4, 1, 2]} intensity={0.55} color="#8A5CF5" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.32}>
            <Stage intensity={0.28} environment={null} shadows={false} adjustCamera={1.75}>
              <SatelliteModel />
            </Stage>
          </Float>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.85} />
      </Canvas>
    </div>
  );
}
