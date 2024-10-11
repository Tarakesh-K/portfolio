import React from "react";
import FirstPart from "./components/firstPart";
import Introduction from "./components/introduction";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <NavBar />
      <FirstPart />
      <Introduction />
    </div>
  );
}
