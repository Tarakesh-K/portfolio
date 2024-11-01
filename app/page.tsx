import React from "react";
import LandingPage from "./components/landingPage";
import Introduction from "./components/introduction";
import NavBar from "./components/navBar";
import WorkExperience from "./components/workExperience";
import Balls from "./components/balls";

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
      <Balls />
      <div className="border-[1px] border-white mt-[40px]" />
      <WorkExperience />
    </div>
  );
}
