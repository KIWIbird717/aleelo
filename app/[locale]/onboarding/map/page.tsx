import React from "react";
import { View } from "@/shared/layout/View";
import { GettingToKnowWithGame } from "@/entities/GettingToKnowWithGame";
import { Map } from "@/entities/Map";

export default function SignInPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <View backgroundEffect={"gradient"} className="relative">
      <Map linkReplacer="cell" />
      <GettingToKnowWithGame locale={locale} />
    </View>
  );
}
