"use client";
import { SkillsThreeDimType } from "@/app/types/types";
import React, { Suspense } from "react";

// Component to load and render a 3D object
export default function SkillModels({ url }: SkillsThreeDimType) {
  return <Suspense fallback={<div>Loading...</div>}>{url}</Suspense>;
}
