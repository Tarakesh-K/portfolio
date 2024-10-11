import React from "react";
import Head from "next/head";

export default function Part1() {
  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>CodeWithTarakesh | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Tarakesh K - MERN Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[1440px] w-full mx-auto p-10 flex flex-col h-screen">
        {/* Centered Tarakesh K section */}
        <div className="flex-grow flex justify-center items-center text-white text-[12.8rem] leading-[1.5] font-robotmono font-semibold">
          Tarakesh K
        </div>
      </div>
    </div>
  );
}
