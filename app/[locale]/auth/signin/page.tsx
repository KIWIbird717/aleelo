import React from "react";
import { View } from "../../../../shared/layout/View";
import { GettingToKnowWithGame } from "../../../../entities/GettingToKnowWithGame";

export default function SignInPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <View backgroundEffect={"gradient"} className="relative">
      <GettingToKnowWithGame locale={locale} />
    </View>
  );
}
