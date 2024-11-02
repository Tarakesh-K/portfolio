"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import TitleCard from "./title/titleCard";
import { imgDetailsArr } from "./array/array";
import { motion } from "framer-motion";

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
    <div className="max-w-[1440px] w-full mx-auto p-4 scroll-mt-[100px]" ref={introRef}>
      <div className="w-full flex flex-col gap-[1rem]">
        <div className="mb-4">
          <TitleCard title="Introduction" />
        </div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 2,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="max-w-[800px] w-full"
        >
          <p className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] leading-[1.5] text-white">
            Detail-oriented full-stack developer with 1.8 years of experience in{" "}
            <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, and{" "}
            <b>Express.js</b>, alongside proficiency in <b>MongoDB</b> and{" "}
            <b>PostgreSQL</b>. Expert in developing responsive web applications
            and optimizing APIs, implementing middleware solutions to enhance
            application performance. Collaborative team player dedicated to
            delivering innovative solutions aligned with business objectives.
          </p>
        </motion.div>
      </div>
      <div className="w-full mt-[40px] grid grid-cols-10 gap-[40px]">
        {imgDetailsArr.map((arr, index) => {
          // Calculate when we are in the last row with 6 items (index 20 to 25)
          const isLastRow = index >= 20;
          const colStart = isLastRow ? `col-start-${index - 17}` : "";

          return (
            <div
              key={index}
              className={`col-span-5 md:col-span-2 lg:col-span-1 flex flex-grow flex-col ${colStart} transition-opacity duration-500 ease-in-out ${
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
                width={110} // Original width
                height={110} // Original height
                className={`max-w-[110px] max-w-[110px] w-full mx-auto h-auto ${arr.bgColor}`} // Responsive width
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
