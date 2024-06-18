"use client";

import { ParalaxAxolotls } from "./ParalaxAxolotls";
import { ParalaxIcons } from "./ParalaxIcons";
import { WavesSvgBg } from "./WavesSvgBg";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic";

// const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

export const ParalaxBackground = ({ stage }: { stage: number }) => {
  return (
    <div className="relative h-[450px]">
      <ParalaxAxolotls stage={stage} className="absolute" />
      <ParalaxIcons className="absolute" stage={stage} />
      <motion.div className="" animate={{ x: stage * -100 }} transition={{ type: "tween" }}>
        <WavesSvgBg maskX={stage} />
      </motion.div>
    </div>
  );
};
