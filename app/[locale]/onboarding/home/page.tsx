"use client";

import { useStages } from "@/entities/onboarding/PracticeOnboardingEftSpeeches/shared/hooks/useStages";
import { Map } from "@/entities/Map";
import { HomeOnboardingEftSpeeches } from "@/entities/onboarding/PracticeHomeEftSpeeches";
import { View } from "@/shared/layout/View";
import { useSizes } from "@/shared/lib/hooks/useSizes";
import { ModalSheet } from "@/widgets/ModalSheet";
import { Navbar } from "@/widgets/Navbar";
import React from "react";

export default function OnboardingHome() {
  const { svgGRef, svgWidth, svgRef, height, padding, svgHeight } = useSizes();
  const { stage, next } = useStages();

  return (
    <View backgroundEffect="gradient">
      {/* <HomeOnboardingEftSpeeches stage={stage} next={next} /> */}

      <div style={{ paddingBottom: 200 }}>
        <Map />
        <ModalSheet svgWidth={svgWidth} padding={padding} svgHeight={svgHeight} height={height} />
        <Navbar
          navBarSettings={{
            0: { isActive: false },
            1: { isActive: false },
            3: { isActive: false },
            4: { isActive: false },
          }}
          svgGRef={svgGRef}
          svgRef={svgRef}
        />
      </div>
    </View>
  );
}
