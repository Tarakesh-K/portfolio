"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProgressAnimationPropsType } from "../types/types";

export default function NavBar(props: ProgressAnimationPropsType) {
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "introduction" },
    { label: "Work Experience", id: "work-experience" },
    { label: "Contact", id: "contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return props.progress > 90 ? (
    <div className="w-full bg-black flex justify-between items-center p-6 fixed z-10 border-b-[2px] border-white">
      <div className="flex items-center">
        <p className="text-[3.2rem] leading-[1.5] font-robotmono font-semibold">
          <span className="text-[#66D9ED]">CodeWithTarakesh</span>
          <span className="text-white">
            .<span className="text-purple-500">_</span>.
          </span>
        </p>
      </div>
      <ul className="flex gap-[20px] items-center">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
            onClick={() => handleScrollToSection(item.id)} // Scroll to the respective section
          >
            <p className="text-gray-300 font-semibold text-right text-[1.2rem]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-[1.8rem] leading-[1.5] font-semibold text-white">
              {item.label}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  ) : null;
}
