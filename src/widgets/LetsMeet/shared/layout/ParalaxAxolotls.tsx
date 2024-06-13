"use client";

import Leela1 from "@/app/images/lets-meet/axolotl-1.png";
import Leela2 from "@/app/images/lets-meet/axolotl-2.png";
import Leela3 from "@/app/images/lets-meet/axolotl-3.png";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

const slides = [
  {
    id: 0,
    image: Leela1,
  },
  {
    id: 1,
    image: Leela2,
  },
  {
    id: 2,
    image: Leela3,
  },
];

export const ParalaxAxolotls = ({ stage, className }: { stage: number; className?: string }) => {
  return (
    <div className={twMerge(className, "z-[6] flex h-[450px]")}>
      {slides.map((axolotl) => {
        const isShown = stage === axolotl.id;
        return (
          <AnimatePresence key={axolotl.id}>
            {isShown && (
              <MotionDiv
                initial={{ opacity: 0, y: 20, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                className={twMerge("flex h-[450px] w-screen items-center justify-center")}
              >
                <Image
                  width={201}
                  height={293}
                  src={axolotl.image.src}
                  alt={`${axolotl.image.src}`}
                />
              </MotionDiv>
            )}
          </AnimatePresence>
        );
      })}
    </div>
  );
};
