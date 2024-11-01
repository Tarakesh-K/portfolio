import React from "react";
import Image from "next/image";
import TitleCard from "./title/titleCard";
import TechStackCards from "./cards/techStackCards";
import {
  authStackProps,
  backEndStackProps,
  dbStackProps,
  frontEndStackProps,
} from "./array/array";

export default function WorkExperience() {
  return (
    <div className="max-w-[1440px] w-full mx-auto p-10">
      <div className="max-w-[1110px] relative w-full mx-auto">
        <div className="text-center mb-4">
          <TitleCard title="Work Experience" />
        </div>
      </div>
    </div>
  );
}
