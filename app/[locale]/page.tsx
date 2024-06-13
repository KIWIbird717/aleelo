import { InitLoader } from "@/entities/InitLoader/InitLoader";
import { View } from "@/shared/layout/View";
import { getServerSession } from "next-auth";
import React from "react";

export default async function MainPage() {
  const session = await getServerSession();
  console.log({ session });
  return (
    <View>
      <InitLoader />
    </View>
  );
}
