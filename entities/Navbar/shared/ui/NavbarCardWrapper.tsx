import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react";

type Props = {
  width: number;
  svgGRef?: MutableRefObject<SVGSVGElement | null>
  svgRef?: MutableRefObject<SVGSVGElement | null>
} & React.SVGProps<SVGSVGElement>;

export const NavbarCardWrapper: FC<Props> = (props) => {
  const { width, svgGRef, svgRef, ...restProps } = props;
  const height = (137 / 383) * width;

  return (
    <svg
      {...restProps}
      ref={svgRef}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref={svgGRef} filter="url(#filter0_diii_6_20851)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={`M${(203.918 / 383) * width} ${(16.1073 / 137) * height}C${(191.065 / 383) * width} ${(10.6309 / 137) * height} ${(176.535 / 383) * width} ${(10.6309 / 137) * height} ${(163.681 / 383) * width} ${(16.1073 / 137) * height}V${(16.1073 / 137) * height}C${(152.892 / 383) * width} ${(20.7045 / 137) * height} ${(142.616 / 383) * width} ${(29.0003 / 137) * height} ${(130.888 / 383) * width} ${(29.0003 / 137) * height}H${(36 / 383) * width}C${(22.7452 / 383) * width} ${(29.0003 / 137) * height} ${(12 / 383) * width} ${(39.7454 / 137) * height} ${(12 / 383) * width} ${(53.0003 / 137) * height}V${(85.0003 / 137) * height}C${(12 / 383) * width} ${(98.2551 / 137) * height} ${(22.7452 / 383) * width} ${(109 / 137) * height} ${(36 / 383) * width} ${(109 / 137) * height}H${(331 / 383) * width}C${(344.255 / 383) * width} ${(109 / 137) * height} ${(355 / 383) * width} ${(98.2551 / 137) * height} ${(355 / 383) * width} ${(85.0003 / 137) * height}V${(53.0003 / 137) * height}C${(355 / 383) * width} ${(39.7454 / 137) * height} ${(344.255 / 383) * width} ${(29.0003 / 137) * height} ${(331 / 383) * width} ${(29.0003 / 137) * height}H${(236.711 / 383) * width}C${(224.983 / 383) * width} ${(29.0003 / 137) * height} ${(214.708 / 383) * width} ${(20.7044 / 137) * height} ${(203.918 / 383) * width} ${(16.1073 / 137) * height}V${(16.1073 / 137) * height}Z`}
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_diii_6_20851"
          x="0"
          y="0"
          width={width}
          height={height}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={(8 / 383) * width} dy={(8 / 137) * height} />
          <feGaussianBlur stdDeviation={(10 / 383) * width} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.155833 0 0 0 0 0.328717 0 0 0 0 0.366667 0 0 0 0.5 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_20851" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6_20851"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={(6 / 383) * width} dy={(6 / 137) * height} />
          <feGaussianBlur stdDeviation={(8.5 / 383) * width} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.660156 0 0 0 0 0.803359 0 0 0 0 0.8125 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_20851" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={(3 / 383) * width} dy={(2 / 137) * height} />
          <feGaussianBlur stdDeviation={(4 / 383) * width} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.840208 0 0 0 0 0.920289 0 0 0 0 0.925 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_6_20851"
            result="effect3_innerShadow_6_20851"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={(3 / 383) * width} dy={(2 / 137) * height} />
          <feGaussianBlur stdDeviation={(2 / 383) * width} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_6_20851"
            result="effect4_innerShadow_6_20851"
          />
        </filter>
      </defs>
    </svg>
  );
};
