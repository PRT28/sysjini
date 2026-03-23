"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  PresentationControls,
  Sphere,
  Stage,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Box3, Group, SRGBColorSpace, Vector3 } from "three";

const MODEL_PRESETS = {
  "earth-00.glb": {
    cameraPosition: [0, 0.4, 4.35],
    fov: 27,
  },
  "space_station.glb": {
    cameraPosition: [0, 0.52, 4.3],
    fov: 24,
    scaleMultiplier: 1.9,
    stageAdjustCamera: 2,
    yOffset: 0.28,
  },
  default: {
    cameraPosition: [0, 0.8, 6.5],
    fov: 32,
    scaleMultiplier: 1,
    stageAdjustCamera: 1.25,
    yOffset: 0,
  },
};

function getModelPreset(src) {
  const matchedKey = Object.keys(MODEL_PRESETS).find((key) => key !== "default" && src.includes(key));
  return matchedKey ? { ...MODEL_PRESETS.default, ...MODEL_PRESETS[matchedKey] } : MODEL_PRESETS.default;
}

function Model({ src, scaleMultiplier = 1, yOffset = 0 }) {
  const { scene } = useGLTF(src);

  const normalizedScene = useMemo(() => {
    const clonedScene = scene.clone(true);
    const box = new Box3().setFromObject(clonedScene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const scale = (2.35 / maxDimension) * scaleMultiplier;

    const group = new Group();
    clonedScene.position.sub(center);
    clonedScene.position.y += yOffset;
    clonedScene.scale.setScalar(scale);
    group.add(clonedScene);

    return group;
  }, [scene, scaleMultiplier, yOffset]);

  return <primitive object={normalizedScene} />;
}

function EarthModel() {
  const [colorMap, bumpMap, cloudsMap, lightsMap] = useTexture([
    "/models/earth_textures/web/earth_color_4k.jpg",
    "/models/earth_textures/web/topography_4k.png",
    "/models/earth_textures/web/earth_clouds_4k.jpg",
    "/models/earth_textures/web/earth_nightlights_4k.jpg",
  ]);

  colorMap.colorSpace = SRGBColorSpace;
  cloudsMap.colorSpace = SRGBColorSpace;
  lightsMap.colorSpace = SRGBColorSpace;

  return (
    <group rotation={[0.35, -0.9, 0.08]}>
      <Sphere args={[1.45, 96, 96]}>
        <meshStandardMaterial map={colorMap} bumpMap={bumpMap} bumpScale={0.05} roughness={1} metalness={0} />
      </Sphere>
      <Sphere args={[1.468, 64, 64]}>
        <meshStandardMaterial
          map={lightsMap}
          emissiveMap={lightsMap}
          emissive="#6f8cff"
          emissiveIntensity={0.45}
          transparent
          opacity={0.32}
          depthWrite={false}
          roughness={1}
          metalness={0}
        />
      </Sphere>
      <Sphere args={[1.515, 64, 64]}>
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.18}
          depthWrite={false}
          roughness={1}
          metalness={0}
        />
      </Sphere>
    </group>
  );
}

export default function ModelShowcase({
  src,
  title,
  caption,
  className = "",
  compact = false,
}) {
  const preset = getModelPreset(src);

  return (
    <div className={`model-shell ${className}`}>
      <div className="model-meta">
        <span className="eyebrow">Relevant Model</span>
        <h3>{title}</h3>
        {caption ? <p>{caption}</p> : null}
      </div>
      <div className={`model-canvas ${compact ? "model-canvas-compact" : ""}`}>
        <Canvas camera={{ position: preset.cameraPosition, fov: preset.fov }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[4, 6, 4]} intensity={1.8} />
          <pointLight position={[-5, -2, -4]} intensity={0.35} color="#8a5cf5" />
          <Suspense fallback={null}>
            <PresentationControls speed={1.2} zoom={1} polar={[-0.22, 0.28]} azimuth={[-0.55, 0.55]}>
              <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.7}>
                {src.includes("earth-00.glb") ? (
                  <EarthModel />
                ) : (
                  <Stage intensity={0.3} environment={null} shadows={false} adjustCamera={preset.stageAdjustCamera}>
                    <Model src={src} scaleMultiplier={preset.scaleMultiplier} yOffset={preset.yOffset} />
                  </Stage>
                )}
              </Float>
            </PresentationControls>
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.4} />
        </Canvas>
      </div>
    </div>
  );
}
