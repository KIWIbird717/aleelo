import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import React from "react";

import { ProfileBottom } from "@/widgets/ProfileBottom";
import { ProfileContent } from "@/widgets/ProfileContent";

interface IProfileProps {}

const getData = async () => {
  return "https://ui-avatars.com/api/size=128";
}

const Profile: NextPage<IProfileProps> = async () => {
  const url = await getData()

  return (
    <View backgroundEffect="gradient">
      <div style={{ paddingBottom: 200 }}>
        <ProfileContent  avatarUrl={url}/>

        <ProfileBottom />
      </div>
    </View>
  );
};
export default Profile;
