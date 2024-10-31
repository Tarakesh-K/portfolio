import { TitleCardProps } from "@/app/types/types";
import React from "react";

export default function TitleCard(props: TitleCardProps) {
  return (
    <div className="w-full">
      <h3 className="text-[4.8rem] leading-[1.5] text-[#A855F7] font-robotmono font-bold">
        {props.title}
      </h3>
    </div>
  );
}
