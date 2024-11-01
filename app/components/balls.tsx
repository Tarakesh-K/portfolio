"use client";
import React, { useEffect, useState, useRef } from "react";
import { image3dType } from "./array/array";
import BallCanvas from "./threeJsFiles/landingPageComponents/ballCanvas";

export default function Balls() {
  const introRef = useRef<HTMLDivElement | null>(null); // Reference to the Introduction component

  return (
    <div className="max-w-[1440px] w-full mx-auto p-10" ref={introRef}>
      <div className="w-full mt-[40px] grid grid-cols-10 gap-[40px]">
        {image3dType.map((arr, index) => {
          return (
            <div
              key={index}
              className={`col-span-1 flex flex-col transition-opacity duration-500 ease-in-out`}
            >
              <BallCanvas url={arr.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
