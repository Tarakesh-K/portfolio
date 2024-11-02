"use client";
import React, { useRef } from "react";
import { image3dType } from "./array/array";
import BallCanvas from "./threeJsFiles/balls/ballCanvas";
import { ProgressAnimationPropsType } from "../types/types";

export default function Balls(props: ProgressAnimationPropsType) {
  const introRef = useRef<HTMLDivElement | null>(null); // Reference to the Introduction component

  return (
    <div className="max-w-[1440px] w-full mx-auto p-4" ref={introRef}>
      <div className="w-full mt-[40px] grid grid-cols-10 gap-[40px]">
        {image3dType.map((arr, index) => {
          return (
            <div
              key={index}
              className={`col-span-5 md:col-span-2 lg:col-span-1 flex flex-col transition-opacity duration-500 ease-in-out`}
            >
              <BallCanvas url={arr.img} {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
