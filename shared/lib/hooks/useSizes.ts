"use client";

import { useEffect, useRef, useState } from "react";
import { useDimensions } from "@/shared/lib/hooks/useDimensions";

/*
  Хук `useSizes` используется для получения и управления размерами SVG-элементов в компоненте React.
  Он предоставляет ссылки на два SVG-элемента, текущие ширину и высоту окна, а также вычисленные
  ширину и высоту SVG-элементов и внутренний отступ.
*/
export const useSizes = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const svgGRef = useRef<SVGSVGElement | null>(null);
  const { width, height } = useDimensions();
  const [svgWidth, setSvgWidth] = useState<number | null>(null);
  const [svgHeight, setSvgHeight] = useState<number | null>(null);
  const padding = (width - Number(svgWidth)) / 2;

  useEffect(() => {
    if (svgGRef.current) {
      setSvgWidth(svgGRef.current.getBoundingClientRect().width);
    }
    if (svgRef.current) {
      setSvgHeight(svgRef.current.getBoundingClientRect().height);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, svgGRef.current, svgRef.current]);

  return {
    svgGRef,
    svgRef,
    width,
    height,
    svgWidth,
    svgHeight,
    padding,
  };
};
