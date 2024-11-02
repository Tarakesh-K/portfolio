import { TitleCardProps } from "@/app/types/types";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TitleCard(props: TitleCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger animation when 10% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : {}}
      transition={{
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1],
      }}
      className="w-full"
    >
      <h3 className="text-[4.8rem] leading-[1.5] text-[#A855F7] font-robotmono font-extrabold">
        {props.title}
      </h3>
    </motion.div>
  );
}
