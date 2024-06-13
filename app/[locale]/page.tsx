import { InitLoader } from "@/entities/InitLoader/InitLoader";
import { Navbar } from "@/entities/Navbar";
import { View } from "@/shared/layout/View";
import React from "react";

export default async function MainPage() {
  return (
    <View>
      <InitLoader />
      <Navbar />
    </View>
  );
}
