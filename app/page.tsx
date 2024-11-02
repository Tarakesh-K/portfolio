"use client";
import React, { useEffect, useState } from "react";
import LandingPage from "./components/landingPage";
import Introduction from "./components/introduction";
import NavBar from "./components/navBar";
import Balls from "./components/balls";
import WorkExperience from "./components/workExperience";
import { ProgressAnimationPropsType } from "./types/types";
import Contact from "./components/contact";

export default function Home() {
  const [landingPageProgress, setLandingPageProgress] = useState<number>(0);
  const [ballProgress, setBallProgress] = useState<number>(0);
  const [earthProgress, setEarthProgress] = useState<number>(0);
  const [showNavBarComponent, setShowNavBarComponent] =
    useState<boolean>(false);

  const landingPageProgressProps: ProgressAnimationPropsType = {
    progress: landingPageProgress,
    setProgress: setLandingPageProgress,
  };

  const ballsProgressProps: ProgressAnimationPropsType = {
    progress: ballProgress,
    setProgress: setBallProgress,
  };

  const earthProgressProps: ProgressAnimationPropsType = {
    progress: earthProgress,
    setProgress: setEarthProgress,
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowNavBarComponent(screenWidth > 1024);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

  // Conditional rendering based on landingPageProgress
  return (
    <div className="w-full overflow-x-hidden bg-black ">
      {showNavBarComponent && <NavBar {...landingPageProgressProps} />}
      <LandingPage {...landingPageProgressProps} />
      <div
        id="introduction"
        className="border-[1px] border-white scroll-mt-[100px]"
      />
      <Introduction />
      <Balls {...ballsProgressProps} />
      <div className="border-[1px] border-white mt-[40px]" />
      <WorkExperience />
      <Contact {...earthProgressProps} />
    </div>
  );
}
