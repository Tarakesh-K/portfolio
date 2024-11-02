"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThreeScene from "./threeJsFiles/threeScene";
import ComputerCanvas from "./threeJsFiles/landingPage/computerCanvas";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProgressAnimationPropsType } from "../types/types";

export default function LandingPage(props: ProgressAnimationPropsType) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Adjusted for more sensitivity
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  console.log(props.progress);

  return (
    <div id="home" className="relative w-full min-h-[90vh] lg:min-h-screen p-4">
      {/* Background image */}
      <Image
        src="/bg_images/waves-purple.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 opacity-[10%]"
      />
      <div className="max-w-[1440px] w-full mx-auto flex flex-col">
        {/* Centered Tarakesh K section */}
        <div className="w-full lg:mt-[80px] flex justify-center items-center text-white font-robotmono font-semibold">
          {/* 3D components positioned around the text */}
          <div className="invisible md:visible absolute top-[10%] left-0">
            <ThreeScene />
          </div>
          <div className="invisible md:visible absolute top-[10%] right-0">
            <ThreeScene />
          </div>
          <div className="invisible md:visible absolute bottom-0 left-0">
            <ThreeScene />
          </div>
          <div className="invisible md:visible absolute bottom-0 right-0">
            <ThreeScene />
          </div>
          <div className="max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1440px] w-full mx-auto">
            <motion.div
              ref={textRef}
              initial={{ y: -50, opacity: 0 }}
              animate={isVisible ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 2,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="w-full relative flex gap-[20px]"
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                transition={{
                  duration: 2,
                  ease: [0.42, 0, 0.58, 1],
                }}
                className="absolute left-[-20px] top-[10px] max-w-[5px] h-[300px] w-full bg-gradient-to-b from-[#A855F7] to-black"
              />
              <div>
                <p className="text-[3.2rem] md:text-[4.8rem] lg:text-[6rem] leading-[1.5]">
                  Hi I&apos;m <span className="text-[#A855F7]">Tarakesh K</span>
                </p>
                <p className="max-w-[400px] w-full text-[1.2rem] lg:text-[1.6rem] leading-[1.33]">
                  I am a full stack developer with 2 years experience who can
                  develop 3D websites, user interfaces, and web applications.
                </p>
              </div>
            </motion.div>
            <div className="w-full h-[300px] md:h-[400px]">
              <ComputerCanvas {...props} />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll-down animation */}
      <div className="absolute bottom-[4%] w-full flex justify-center items-center">
        <Link href="#introduction">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#FFFFFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-[#FFFFFF] my-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
