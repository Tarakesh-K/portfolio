"use client"
import React from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const menuItems = ["Home", "About", "Work Experience", "Projects", "Contact"];

  return (
    <div className="w-full bg-black flex justify-between mb-10 px-10 py-6 fixed z-10 border-b-[2px] border-white">
      <div className="w-max">
        <p className="text-[3.2rem] leading-[1.5] font-robotmono font-semibold">
          <span className="text-[#66D9ED]">CodeWithTarakesh</span>
          <span className="text-white">
            .<span className="text-purple-500">_</span>.
          </span>
        </p>
      </div>
      <ul className="max-w-max w-full flex gap-[20px]">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            className="w-max flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: -20 }} // Initial state: invisible and moved up
            animate={{ opacity: 1, y: 0 }} // Final state: visible and in place
            transition={{ duration: 0.3, delay: index * 0.3 }} // Delay based on index
          >
            <p className="text-gray-300 font-semibold text-right text-[1.2rem]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-[1.8rem] leading-[1.5] font-semibold text-white">
              {item}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
