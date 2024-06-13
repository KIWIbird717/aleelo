"use client";

import { useDimensions } from "@/shared/lib/hooks/useDimensions";

import CloudSvg from "@/app/images/svg/lets-meet/cloud.svg";
import HouseSvg from "@/app/images/svg/lets-meet/house.svg";
import StartSvg from "@/app/images/svg/lets-meet/star.svg";
import StrawberrySvg from "@/app/images/svg/lets-meet/strawberry.svg";

import BunSvg from "@/app/images/svg/lets-meet/bun.svg";
import HeartSvg from "@/app/images/svg/lets-meet/heart.svg";
import LeafsSvg from "@/app/images/svg/lets-meet/leafs.svg";
import LightSvg from "@/app/images/svg/lets-meet/light.svg";

import FlowerSvg from "@/app/images/svg/lets-meet/flowers.svg";
import SparclesSvg from "@/app/images/svg/lets-meet/sparcles.svg";
import MusicSvg from "@/app/images/svg/lets-meet/music.svg";
import SmileSvg from "@/app/images/svg/lets-meet/smile.svg";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import { useCallback, useMemo } from "react";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

export const ParalaxIcons = ({ className, stage }: { className: string; stage: number }) => {
  const { width } = useDimensions();

  const transition = useCallback(
    (isShown: boolean) => ({
      type: "tween",
      ease: "circOut",
      duration: 0.5,
      delay: isShown ? 0.05 : 0.5,
    }),
    [],
  );

  const slides = useMemo(
    () => [
      {
        id: 0,
        icons: {
          0: (isShown: boolean) => (
            <MotionDiv
              className="absolute right-[110px] top-[20px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <CloudSvg />
            </MotionDiv>
          ),
          1: (isShown: boolean) => (
            <MotionDiv
              className="absolute left-[10px] top-[10px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <HouseSvg />
            </MotionDiv>
          ),
          2: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[70px] right-[30px]"
              animate={{ y: isShown ? 0 : 150 }}
              transition={transition(isShown)}
            >
              <StartSvg />
            </MotionDiv>
          ),
          3: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[5px] left-[20px]"
              animate={{ y: isShown ? 0 : 100 }}
              transition={transition(isShown)}
            >
              <StrawberrySvg />
            </MotionDiv>
          ),
        },
      },
      {
        id: 1,
        icons: {
          0: (isShown: boolean) => (
            <MotionDiv
              className="absolute right-[40px] top-[20px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <LightSvg />
            </MotionDiv>
          ),
          1: (isShown: boolean) => (
            <MotionDiv
              className="absolute left-[10px] top-[30px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <HeartSvg />
            </MotionDiv>
          ),
          2: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[10px] right-[30px]"
              animate={{ y: isShown ? 0 : 150 }}
              transition={transition(isShown)}
            >
              <BunSvg />
            </MotionDiv>
          ),
          3: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[20px] left-[20px]"
              animate={{ y: isShown ? 0 : 100 }}
              transition={transition(isShown)}
            >
              <LeafsSvg />
            </MotionDiv>
          ),
        },
      },
      {
        id: 2,
        icons: {
          0: (isShown: boolean) => (
            <MotionDiv
              className="absolute right-[60px] top-[20px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <SparclesSvg />
            </MotionDiv>
          ),
          1: (isShown: boolean) => (
            <MotionDiv
              className="absolute left-[40px] top-[10px]"
              animate={{ y: isShown ? 0 : -100 }}
              transition={transition(isShown)}
            >
              <FlowerSvg />
            </MotionDiv>
          ),
          2: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[70px] right-[30px]"
              animate={{ y: isShown ? 0 : 150 }}
              transition={transition(isShown)}
            >
              <MusicSvg />
            </MotionDiv>
          ),
          3: (isShown: boolean) => (
            <MotionDiv
              className="absolute bottom-[5px] left-[30px]"
              animate={{ y: isShown ? 0 : 100 }}
              transition={transition(isShown)}
            >
              <SmileSvg />
            </MotionDiv>
          ),
        },
      },
    ],
    [transition],
  );

  return (
    <MotionDiv
      animate={{ x: (width || 0) * -stage }}
      transition={{ type: "tween", duration: 0.4 }}
      className={twMerge(className, "z-[5] flex h-[300px] transition-all duration-500 ease-out")}
    >
      {slides.map((element) => {
        const isShown = stage === element.id;
        return (
          <div className={`relative h-full w-screen`} key={element.id}>
            {element.icons[0](isShown)}
            {element.icons[1](isShown)}
            {element.icons[2](isShown)}
            {element.icons[3](isShown)}
          </div>
        );
      })}
    </MotionDiv>
  );
};
