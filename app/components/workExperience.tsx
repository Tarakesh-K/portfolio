"use client";
import React, { useRef } from "react";
import Image from "next/image";
import TitleCard from "./title/titleCard";
import TechStackCards from "./cards/techStackCards";
import {
  authStackProps,
  backEndStackProps,
  dbStackProps,
  frontEndStackProps,
} from "./array/array";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const introRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-[1440px] w-full mx-auto p-10">
      <div className="max-w-[1110px] relative w-full mx-auto">
        <div className="mb-4">
          <TitleCard title="Work Experience" />
        </div>

        <motion.div
          ref={introRef}
          initial={{ opacity: 0 }} // Start invisible
          animate={{ opacity: 1 }} // Animate to visible
          transition={{
            duration: 4, // Keep the duration the same for both x and opacity
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute top-[8rem] bottom-0 border-[1px] border-white left-0 md:left-1/2 md:transform md:-translate-x-1/2 mx-auto"
        />

        {/* First Row */}
        <div className="w-full flex gap-[40px] items-stretch ml-[20px] md:ml-0">
          <Image
            src={"/skillsImg/react.svg"}
            alt={""}
            width={30}
            height={40}
            className="absolute top-[100px] -left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-0 bg-white rounded-full"
          />
          <TechStackCards {...frontEndStackProps} />
          <div className="md:basis-1/2" />
        </div>

        {/* Second Row */}
        <div className="w-full mt-[10px] flex gap-[40px] md:flex-row-reverse items-stretch ml-[20px] md:ml-0">
          <Image
            src={"/skillsImg/node-js.svg"}
            alt={""}
            width={30}
            height={40}
            className="absolute top-[30%] -left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-0 bg-white rounded-full"
          />
          <TechStackCards {...backEndStackProps} />
          <div className="md:basis-1/2" />
        </div>

        {/* Third Row */}
        <div className="w-full mt-[10px] flex gap-[40px] items-stretch ml-[20px] md:ml-0">
          <Image
            src={"/skillsImg/mongodb.svg"}
            alt={""}
            width={30}
            height={40}
            className="absolute top-[56.4%] -left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-0 bg-white rounded-full"
          />
          <TechStackCards {...dbStackProps} />
          <div className="md:basis-1/2" />
        </div>

        {/* Fourth Row */}
        <div className="w-full mt-[10px] flex gap-[40px] md:flex-row-reverse items-stretch ml-[20px] md:ml-0">
          <Image
            src={"/skillsImg/keycloak.svg"}
            alt={""}
            width={30}
            height={40}
            className="absolute top-[79%] -left-6 md:left-1/2 md:transform md:-translate-x-1/2 z-0 bg-white rounded-full"
          />
          <TechStackCards {...authStackProps} />
          <div className="md:basis-1/2" />
        </div>
      </div>
    </div>
  );
}
