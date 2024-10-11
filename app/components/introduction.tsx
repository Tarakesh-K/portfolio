import React from "react";

export default function Introduction() {
  return (
    <div className="max-w-[1440px] w-full mx-auto p-10 border-t-[2px] border-white">
      <div className="w-full flex flex-col gap-[1rem]">
        <div>
          <h3 className="text-[4rem] leading-[1.5] text-[#66D9ED] font-robotmono font-semibold">
            Introduction
          </h3>
        </div>
        <div className="max-w-[800px] w-full">
          <p className="text-[1.8rem] leading-[1.5] text-white">
            Detail-oriented full-stack developer with 1.8 years of experience in{" "}
            <b>React.js</b>, <b>Next.js</b>, <b>Node.js</b>, and{" "}
            <b>Express.js</b>, alongside proficiency in <b>MongoDB</b> and{" "}
            <b>PostgreSQL</b>. Expert in developing responsive web applications
            and optimizing APIs, implementing middleware solutions to enhance
            application performance. Collaborative team player dedicated to
            delivering innovative solutions aligned with business objectives.
          </p>
        </div>
      </div>
      <div className="w-full mt-[40px] grid grid-cols-4">
        <div className="col-span-1">
          <div className="w-full rounded-[8px] border-4 border-black bg-gradient-to-b from-[#66D9ED] to-white text-white min-h-[400px] text-black">
            
          </div>
        </div>
      </div>
    </div>
  );
}
