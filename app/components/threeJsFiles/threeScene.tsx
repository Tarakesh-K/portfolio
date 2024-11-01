"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import React, { useRef } from "react";
import { Mesh } from "three";

// Cube component that rotates
const RotatingCube = () => {
  const cubeRef = useRef<Mesh>(null);

  // Rotate the cube on each frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01; // Rotate around x-axis
      cubeRef.current.rotation.y += 0.01; // Rotate around y-axis
    }
  });

  return (
    <Box ref={cubeRef} args={[2, 2, 2]}>
      <meshStandardMaterial attach="material" color="#A855F7" />
    </Box>
  );
};

// Main scene component with a canvas
const ThreeScene = () => {
  return (
    <Canvas className="max-w-[100px] h-[100px]">
      {/* Add height class */}
      <object3D />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Canvas>
  );
};

export default ThreeScene;
