"use client";
import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import ThreeScene from "./threeJsFiles/threeScene";
import ComputerCanvas from "./threeJsFiles/landingPageComponents/computerCanvas";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-screen">
      {/* Background image */}
      <Image
        src="/bg_images/waves-purple.svg" // Path to your image
        alt="Background"
        layout="fill" // This makes the image fill the parent container
        objectFit="cover" // This ensures the image covers the entire area
        className="absolute top-0 left-0 z-0 opacity-[10%]" // Positioning the image
      />
      <div className="max-w-[1440px] w-full mx-auto p-10 flex flex-col">
        {/* Ensure this has a higher z-index */}
        {/* Centered Tarakesh K section */}
        <div className="w-full mt-[60px] flex justify-center items-center text-white text-[6rem] leading-[1.5] font-robotmono font-semibold">
          <div className="absolute top-[10%] left-0">
            <ThreeScene />
          </div>
          <div className="absolute top-[10%] right-0">
            <ThreeScene />
          </div>
          <div className="absolute bottom-0 left-0">
            <ThreeScene />
          </div>
          <div className="absolute bottom-0 right-0">
            <ThreeScene />
          </div>
          <div className="max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1440px] w-full mx-auto">
            <div className="w-full relative flex gap-[20px]">
              <div className="absolute left-[-20px] top-[10px] max-w-[5px] h-[300px] w-full bg-gradient-to-b from-[#A855F7] to-black" />
              <div>
                <p>
                  Hi I&apos;m <span className="text-[#A855F7]">Tarakesh K</span>
                </p>
                <p className="max-w-[400px] w-full text-[1.6rem] leading-[1.33]">
                  Iam a full stack developer with 2 years experience who can
                  develop 3d websites, user interfaces and web applications
                </p>
              </div>
            </div>
            <div className="w-full h-[400px]">
              <ComputerCanvas />
            </div>
          </div>
        </div>
      </div>
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
