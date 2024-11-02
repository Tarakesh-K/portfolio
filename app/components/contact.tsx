import React, { useState, useRef, useEffect } from "react";
import { ContactFormType } from "../types/types";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "./styles";
import EarthCanvas from "./threeJsFiles/contact/earthCanvas";
import { slideIn } from "../utils/motion";
import TitleCard from "./title/titleCard";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const formRef = useRef();
  const [form, setForm] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger animation when 10% of the element is in view
    );

    if (paraRef.current) {
      observer.observe(paraRef.current);
    }

    return () => {
      if (paraRef.current) {
        observer.unobserve(paraRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-[1440px] w-full mx-auto p-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1D1836] p-8 rounded-2xl"
      >
        <div className="mb-4">
          <motion.p
            ref={paraRef}
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.5,
              ease: [0.42, 0, 0.58, 1],
            }}
            className={styles.sectionSubText}
          >
            Get in touch
          </motion.p>
          <TitleCard title="Contact" />
        </div>
        <form
          action="formRef"
          onSubmit={(e) => handleSubmit(e)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={(e) => handleChange(e)}
              className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={(e) => handleChange(e)}
              className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              placeholder="What do you want to say"
              onChange={(e) => handleChange(e)}
              className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
