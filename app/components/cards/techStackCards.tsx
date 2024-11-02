"use client";
import { TechStackCardsPropsType } from "@/app/types/types";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function TechStackCards(props: TechStackCardsPropsType) {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
        } else {
          setIsVisible(false); // Set visibility to false when out of view
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

  const getXStart = (): number => {
    // Check window width and return corresponding xStart value
    if (typeof window !== "undefined") {
      return window.innerWidth <= 500 ? -50 : props.xStart;
    }
    return props.xStart; // Fallback in case window is undefined (server-side rendering)
  };

  const getXEnd = (): number => {
    return window.innerWidth <= 500 ? 0 : props.xEnd; // Adjust xEnd for mobile view
  };

  return (
    <motion.div
      ref={introRef}
      initial={{ x: getXStart(), opacity: 0 }} // Start invisible
      animate={
        isVisible
          ? { x: getXEnd(), opacity: 1 }
          : { x: getXStart(), opacity: 0 }
      } // Animate based on visibility
      transition={{
        duration: 2,
        ease: [0.42, 0, 0.58, 1],
      }}
      className="w-full md:basis-1/2 bg-[#1D1836] flex flex-col gap-[10px] p-[16px] rounded-[8px]"
    >
      <p className="font-robotmono text-white text-[1.4rem] md:text-[2rem] lg:text-[2.4rem] leading-[1.5]">
        {props.title}
      </p>
      <p className="font-robotmono font-normal text-[#AAA6C3] text-[1.4rem] md:text-[1.6rem] lg:text-[2rem] leading-[1.5]">
        {props.skills}
      </p>
      <ul className="w-full list-disc p-[0px_16px] font-robotmono text-[#AAA6C3] text-[1.2rem] lg:text-[1.6rem] leading-[1.5]">
        {props.list.map((li, index) => (
          <li key={index} className="mb-2 text-white">
            {li}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
