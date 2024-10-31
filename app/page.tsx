import React from "react";
import LandingPage from "./components/landingPage";
import Introduction from "./components/introduction";
import NavBar from "./components/navBar";
import WorkExperience from "./components/workExperience";
// import SkillsThreeDim from "./components/skillsThreeDim";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <NavBar />
      <LandingPage />
      <div
        id="introduction"
        className="border-[1px] border-white scroll-mt-[100px]"
      />
      <Introduction />
      <div className="border-[1px] border-white mt-[40px]" />
      <WorkExperience />
    </div>
  );
}
