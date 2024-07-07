import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import React from "react";

import { ProfileBottom } from "@/widgets/ProfileBottom";
import { ProfileContent } from "@/widgets/ProfileContent";

interface IProfileProps {}

const Profile: NextPage<IProfileProps> = () => {
  return (
    <View backgroundEffect="gradient">
      <div style={{ paddingBottom: 200 }}>
        <ProfileContent />

        <ProfileBottom />
      </div>
    </View>
  );
};
export default Profile;
