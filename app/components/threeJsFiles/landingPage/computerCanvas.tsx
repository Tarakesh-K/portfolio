"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./canvasLoader";
import { ProgressAnimationPropsType } from "@/app/types/types";

const Computers = ({ isMobile }: { isMobile: number }) => {
  const computer = useGLTF("./assets/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 10, 0]} // Position the light directly above the object
        angle={0.12}
        penumbra={1}
        intensity={2} // Increase intensity for a brighter effect
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={
          isMobile <= 500
            ? 0.4
            : isMobile <= 768
            ? 0.6
            : isMobile <= 1024
            ? 0.8
            : 1
        }
        position={
          isMobile <= 500
            ? [-3, -2.25, -1.5]
            : isMobile <= 768
            ? [-3, -2.25, -1.5]
            : isMobile <= 1440
            ? [-3, -1.25, -2]
            : [0, -3.25, -1.5]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = (props: ProgressAnimationPropsType) => {
  const [isMobile, setIsMobile] = useState<number>(0);

  useEffect(() => {
    setIsMobile(window.innerWidth);
  }, []);

  return (
    <Canvas
      className="w-full h-full" // Ensure Canvas fills parent div
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader {...props} />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default React.memo(ComputerCanvas);
