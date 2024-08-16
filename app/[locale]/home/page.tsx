"use client";

import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/entities/Navbar";
import { Map } from "@/entities/Map";
import { View } from "@/shared/layout/View";
import { useSizes } from "@/shared/lib/hooks/useSizes";

export default function HomePage() {
  const { svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();

  return (
    <View backgroundEffect="gradient">
      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar svgGRef={svgGRef} svgRef={svgRef} />
      </div>
    </View>
  );
}
