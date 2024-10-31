"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { imgDetailsArr } from "./array/array";

export default function Introduction() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const introRef = useRef<HTMLDivElement | null>(null); // Reference to the Introduction component
  const [isVisible, setIsVisible] = useState<boolean>(false); // Track visibility

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view

          imgDetailsArr.forEach((_, index) => {
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
      <div className="w-full flex flex-col gap-[1rem]">
        <div>
          <h3 className="text-[4rem] leading-[1.5] text-[#A855F7] font-robotmono font-semibold">
            Overview
          </h3>
        </div>
        <div className="max-w-[800px] w-full">
          <p className="text-[1.8rem] leading-[1.5] text-white">
            Detail-oriented full-stack developer with 1.8 years of experience in{" "}
            <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, and{" "}
            <b>Express.js</b>, alongside proficiency in <b>MongoDB</b> and{" "}
            <b>PostgreSQL</b>. Expert in developing responsive web applications
            and optimizing APIs, implementing middleware solutions to enhance
            application performance. Collaborative team player dedicated to
            delivering innovative solutions aligned with business objectives.
          </p>
        </div>
      </div>
      <div className="w-full mt-[40px] grid grid-cols-10 gap-[40px]">
        {imgDetailsArr.map((arr, index) => {
          // Calculate when we are in the last row with 6 items (index 20 to 25)
          const isLastRow = index >= 20;
          const colStart = isLastRow ? `col-start-${index - 17}` : "";

          return (
            <div
              key={index}
              className={`col-span-1 flex flex-grow flex-col ${colStart} transition-opacity duration-500 ease-in-out ${
                visibleItems.includes(index)
                  ? "opacity-100"
                  : isVisible
                  ? "opacity-0"
                  : "opacity-0"
              }`}
            >
              <Image
                src={arr.img}
                alt={arr.description}
                width={20}
                height={20}
                className={`w-full h-full ${arr.bgColor}`}
              />
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
