"use client"

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import React from "react";

import { ProfileBottom } from "@/widgets/ProfileBottom";
import { ProfileContent } from "@/widgets/ProfileContent";
import { useBackground } from "@/shared/lib/hooks/useBackground";

interface IProfileProps {
}

const Profile: NextPage<IProfileProps> = () => {
// useBackground("none")
  return (
    <View>
      <div style={{ paddingBottom: 200 }}>
        <ProfileContent />

        <ProfileBottom />
      </div>
    </View>
  );
};
export default Profile;