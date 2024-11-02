import { ProgressAnimationPropsType, UrlType } from "@/app/types/types";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../landingPage/canvasLoader";
import { Suspense } from "react";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (props: UrlType) => {
  const [decal] = useTexture([props.url]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.25]} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FFFFFF"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export default function BallCanvas(
  props: UrlType & ProgressAnimationPropsType
) {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader {...props} />}>
        <OrbitControls autoRotate autoRotateSpeed={5} enableZoom={false} />
        <Ball url={props.url} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
