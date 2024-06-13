"use client";

import { ParalaxAxolotls } from "./ParalaxAxolotls";
import { ParalaxIcons } from "./ParalaxIcons";
import { WavesSvgBg } from "./WavesSvgBg";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

export const ParalaxBackground = ({ stage }: { stage: number }) => {
  return (
    <div className="relative h-[450px]">
      <ParalaxAxolotls stage={stage} className="absolute" />
      <ParalaxIcons className="absolute" stage={stage} />
      <MotionDiv className="" animate={{ x: stage * -100 }} transition={{ type: "tween" }}>
        <WavesSvgBg maskX={stage} />
      </MotionDiv>
    </div>
  );
};
