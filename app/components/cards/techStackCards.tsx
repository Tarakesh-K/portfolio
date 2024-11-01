import { TechStackCardsPropsType } from "@/app/types/types";
import React from "react";

export default function TechStackCards(props: TechStackCardsPropsType) {
  return (
    <div className="w-full md:basis-1/2 bg-[#1D1836] flex flex-col gap-[10px] p-[16px] rounded-[8px]">
      <p className="font-robotmono text-white text-[2.4rem] leading-[1.5]">
        {props.title}
      </p>
      <p className="font-robotmono font-normal text-[#AAA6C3] text-[2rem] leading-[1.5]">
        {props.skills}
      </p>
      <ul className="w-full list-disc p-[0px_16px] font-robotmono text-[#AAA6C3] text-[1.6rem] leading-[1.5]">
        {props.list.map((li, index) => (
          <li key={index} className="mb-2 text-white">
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
}
