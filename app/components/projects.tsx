"use client";
import React from "react";
import { Tilt } from "react-tilt";
import TitleCard from "./title/titleCard";
import { motion } from "framer-motion";
import { ProjectCardPropsType } from "../types/types";
import { projects } from "../constants/index";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const ProjectCard = (props: ProjectCardPropsType) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-[#1D1836] p-5 rounded-2xl w-full w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={props.image}
            alt={"Dummy image"}
            fill
            className="w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3" />
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="max-w-[1440px] w-full mx-auto p-10">
      <div className="max-w-[1110px] relative w-full mx-auto">
        <div className="mb-4">
          <TitleCard title="Projects" />
        </div>
        <div className="w-full grid grid-cols-4 gap-[20px]">
          {projects.map((project, index) => (
            <div
              className="col-span-4 sm:col-span-2 lg:col-span-1"
              key={`project-${index}`}
            >
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
