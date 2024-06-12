import { InitLoader } from "@/entities/InitLoader/InitLoader";
import { View } from "@/shared/layout/View";
import React from "react";

export default async function MainPage() {
  return (
    <View>
      <InitLoader />
    </View>
  );
}
