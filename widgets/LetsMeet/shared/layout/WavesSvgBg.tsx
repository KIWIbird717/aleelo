"use client";

import dynamic from "next/dynamic";
const MotionPath = dynamic(() => import("framer-motion").then((mod) => mod.motion.path));

export const WavesSvgBg = ({ maskX }: { maskX: number }) => {
  return (
    <svg
      width="1213"
      height="326"
      viewBox="0 0 1213 326"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.8}
    >
      <mask
        id="mask0_233_978"
        style={{
          maskType: "alpha",
          transition: "all",
          animationDuration: "0.5s",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1213"
        height="326"
      >
        <MotionPath
          animate={{ x: maskX * -200 }}
          transition={{ type: "tween" }}
          className="duration-400 transition-all ease-out"
          d="M148.561 256.612C112.046 252.985 34.5142 264.773 0 320.991V0H995.91H1213V276.107C1083.95 350.914 966.562 267.493 899.871 267.493C818.337 267.493 791.326 320.991 733.302 325.525C621.291 334.277 598.986 218.301 476.696 286.081C350.607 355.968 260.069 267.688 148.561 256.612Z"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_233_978)">
        <path
          d="M148.5 283C112 279 34.5 292 0 354V0H995.5H1212.5V304.5C1083.5 387 966.163 295 899.5 295C818 295 791 354 733 359C621.035 368.652 598.739 240.75 476.5 315.5C350.462 392.573 259.962 295.215 148.5 283Z"
          fill="url(#paint0_linear_233_978)"
        />
        <path
          opacity="0.5"
          d="M963.517 146C871.976 146 846.704 241.19 769.766 246.696C644.007 255.695 599.346 149.014 451.34 201.476C270.982 265.405 210.415 98.9155 -76 219.657V339H1042.14L1246 331.541V188.889C1101.11 265.809 1038.39 146 963.517 146Z"
          fill="url(#paint1_linear_233_978)"
        />
        <path
          d="M88.7583 196C47.2001 196 -49.9562 216 -100.5 280.661V387H1017.64L1221.5 379V208C1076.61 290.5 1040.67 199.5 939.017 199.5C837.367 199.5 820.374 255.765 751.443 270C642.493 292.5 592.511 191.5 443.688 262C295.976 331.973 236.458 196 88.7583 196Z"
          fill="url(#paint2_linear_233_978)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_233_978"
          x1="730.5"
          y1="359.5"
          x2="730.5"
          y2="-0.500007"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#409294" />
          <stop offset="1" stopColor="#88C8A1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_233_978"
          x1="744.494"
          y1="305.901"
          x2="744.494"
          y2="89.5918"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#81C3A3" />
          <stop offset="1" stopColor="#EFCD64" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_233_978"
          x1="719.994"
          y1="351.5"
          x2="719.994"
          y2="119.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0001" stopColor="#409294" />
          <stop offset="1" stopColor="#387682" />
        </linearGradient>
      </defs>
    </svg>
  );
};
