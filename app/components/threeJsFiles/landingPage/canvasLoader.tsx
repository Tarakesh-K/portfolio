import React, { useEffect } from "react";
import { Html, useProgress } from "@react-three/drei";
import { ProgressAnimationPropsType } from "@/app/types/types";

const CanvasLoader = (props: ProgressAnimationPropsType) => {
  const { progress } = useProgress();

  useEffect(() => {
    props.setProgress(progress);
  }, [progress]);

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-[14px] text-[#F1F1F1] font-extrabold mt-[40px]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
