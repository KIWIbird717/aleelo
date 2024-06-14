"use client";

import { View } from "@/shared/layout/View";
import { LetsMeetWidget } from "@/widgets/LetsMeet";

export default function LetsMeetFirstPage() {
  return (
    <View backgroundEffect="vignette">
      <LetsMeetWidget />
    </View>
  );
}
