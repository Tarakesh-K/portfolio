"use client";
import React, { useState, useRef, useEffect } from "react";
import { ContactFormType, ProgressAnimationPropsType } from "../types/types";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "./styles";
import EarthCanvas from "./threeJsFiles/contact/earthCanvas";
import TitleCard from "./title/titleCard";

function Contact(props: ProgressAnimationPropsType) {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  // const formRef = useRef();
  const [form, setForm] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate that the environment variables are available
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUB_KEY; // Corrected the variable name here
    const toEmail = process.env.NEXT_PUBLIC_EMAIL;

    if (!serviceId || !templateId || !publicKey || !toEmail) {
      alert("Email service configuration is missing or invalid.");
      console.error("Environment variables are not properly set.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Tarakesh K",
          from_email: form.email,
          to_email: toEmail,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Email sending error:", error);
          alert("Something went wrong while sending the email");
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Trigger animation when 10% of the element is in view
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <div id="contact" className="w-full p-4 scroll-mt-[100px]">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col-reverse lg:flex-row">
        <motion.div
          ref={mainRef}
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="w-full bg-[#1D1836] p-8 rounded-2xl"
        >
          <div className="mb-4">
            <motion.p className={styles.sectionSubText}>Get in touch</motion.p>
            <TitleCard title="Contact" />
          </div>
          <form
            action="formRef"
            onSubmit={(e) => handleSubmit(e)}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-[1.4rem] leading-[1.33]">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                placeholder="What's your name?"
                onChange={(e) => handleChange(e)}
                className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[1.4rem] leading-[1.33]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-[1.4rem] leading-[1.33]">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="What's your email?"
                onChange={(e) => handleChange(e)}
                className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[1.4rem] leading-[1.33]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 text-[1.4rem] leading-[1.33]">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                placeholder="What do you want to say"
                onChange={(e) => handleChange(e)}
                className="bg-[#2C2359] py-4 px-6 place-holder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[1.4rem] leading-[1.33]"
              />
            </label>
            <button
              type="submit"
              className="w-fit text-white text-[1.4rem] leading-[1.33] bg-[#2C2359] py-4 px-8 rounded-2xl font-bold"
            >
              {loading ? "Sending" : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div className="w-full h-[350px] md:h-[550px] xl:h-auto">
          <EarthCanvas {...props} />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
