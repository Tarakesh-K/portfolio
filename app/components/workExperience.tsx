import React from "react";
import TitleCard from "./title/titleCard";
import TechStackCards from "./cards/techStackCards";
import { TechStackCardsPropsType } from "../types/types";

export default function WorkExperience() {
  const frontEndStackProps: TechStackCardsPropsType = {
    title: "Frontend Development",
    skills: "Next.js, React.js, Redux with Tailwind CSS",
    list: [
      "Developed dynamic and responsive web applications using Next.js and React.js",
      "Implemented state management with Redux to optimize UI performance.",
      "Styled components and layouts efficiently using Tailwind CSS",
      "Collaborated with backend teams to integrate APIs and ensure seamless frontend-backend interactions.",
      "Focused on frontend architecture, code modularity, and enhancing user experience.",
    ],
  };

  const backEndStackProps: TechStackCardsPropsType = {
    title: "Backend Development",
    skills: "Node.js, Express.js, Redux with Tailwind CSS",
    list: [
      "Developed dynamic and responsive web applications using Next.js and React.js",
      "Implemented state management with Redux to optimize UI performance.",
      "Styled components and layouts efficiently using Tailwind CSS",
      "Collaborated with backend teams to integrate APIs and ensure seamless frontend-backend interactions.",
      "Focused on frontend architecture, code modularity, and enhancing user experience.",
    ],
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto p-10">
      <div className="max-w-[1110px] relative w-full mx-auto">
        <div className="text-center mb-4">
          <TitleCard title="Work Experience" />
        </div>

        <div className="absolute top-[8rem] bottom-0 border-[1px] border-white left-1/2 transform -translate-x-1/2 mx-auto" />

        {/* First Row */}
        <div className="w-full flex gap-[20px] items-stretch">
          <TechStackCards {...frontEndStackProps} />
          <div className="basis-1/2" />
        </div>

        {/* Second Row */}
        <div className="w-full flex gap-[20px] flex-row-reverse items-stretch">
          <TechStackCards {...backEndStackProps} />
          <div className="basis-1/2" />
        </div>
      </div>
    </div>
  );
}
