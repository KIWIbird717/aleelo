import React from "react";
import { View } from "@/shared/layout/View";
import { FamiliarisationEft } from "@/widgets/FamiliarisationEft";

export default function SignInPage(
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) {
  return (
    <View backgroundEffect={"gradient"} className="relative">
      <FamiliarisationEft locale={locale} />
    </View>
  );
}