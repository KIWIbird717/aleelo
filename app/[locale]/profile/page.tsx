import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import React from "react";
import { ProfilePage } from "@/widgets/ProfilePage";

interface IProfileProps {}

const getData = async () => {
  return "https://ui-avatars.com/api/size=128";
}

const Profile: NextPage<IProfileProps> = async () => {
  const url = await getData()

  return (
    <View backgroundEffect="gradient">
      <ProfilePage url={url} />
    </View>
  );
};
export default Profile;
