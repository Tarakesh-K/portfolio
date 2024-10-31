"use client";
import React, { useEffect, useState, useRef } from "react";
import { threeDimObject } from "./array/array";
import SkillModels from "./threeJsFiles.tsx/skillModels";

export default function SkillsThreeDim() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const introRef = useRef<HTMLDivElement | null>(null); // Reference to the Introduction component
  const [isVisible, setIsVisible] = useState<boolean>(false); // Track visibility

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view

          threeDimObject.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prevItems) => [...prevItems, index]);
            }, index * 50); // Adjust timing as needed
          });
        } else {
          setIsVisible(false); // Set visibility to false when out of view
          setVisibleItems([]); // Reset visible items when out of view
        }
      });
    });

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-[1440px] w-full mx-auto p-10" ref={introRef}>
      <div className="w-full mt-[40px] grid grid-cols-10 gap-[40px]">
        {threeDimObject.map((arr, index) => {
          // Calculate when we are in the last row with 6 items (index 20 to 25)
          const isLastRow = index >= 20;
          const colStart = isLastRow ? `col-start-${index - 17}` : "";

          return (
            <div
              key={index}
              className={`col-span-1 flex flex-col ${colStart} transition-opacity duration-500 ease-in-out ${
                visibleItems.includes(index)
                  ? "opacity-100"
                  : isVisible
                  ? "opacity-0"
                  : "opacity-0"
              }`}
            >
              <SkillModels url={arr.object} />
              <p className="font-monospace font-semibold text-[1.6rem] leading-[1.33] text-white text-center">
                {arr.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
