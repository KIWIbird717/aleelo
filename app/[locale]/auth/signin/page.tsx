import React from "react";
import { View } from "@/shared/layout/View";
import { GettingToKnowWithGame } from "@/entities/GettingToKnowWithGame";
import { Map } from "@/entities/Map";
import { Logger } from "@/shared/lib/utils/logger/Logger";

export default function SignInPage({
  params: { locale, isOnboarding },
}: {
  params: { locale: string; isOnboarding?: boolean };
}) {
  const logger = new Logger("SignInPage");
  logger.debug({ isOnboarding });

  return (
    <View backgroundEffect={"gradient"} className="relative">
      <Map />
      <GettingToKnowWithGame locale={locale} />
    </View>
  );
}
