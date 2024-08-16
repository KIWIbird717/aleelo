"use client";

import { NextPage } from "next";
import { View } from "@/shared/layout/View";
import React from "react";
import { ProfilePage } from "@/widgets/ProfilePage";
import { UserService } from "@/shared/lib/services/user";

interface IProfileProps {}

const getData = async () => {
  return "https://ui-avatars.com/api/size=128";
};

const Profile: NextPage<IProfileProps> = async () => {
  const url = await getData();

  // TODO: Временно добавлено, для тестирования
  const deleteProfile = async () => {
    await UserService.deleteProfile()
    localStorage.clear()
  }

  return (
    <View backgroundEffect="gradient">
      <button onClick={deleteProfile}>
        Удалить аккаунт
      </button>
      <ProfilePage url={url} />
    </View>
  );
};
export default Profile;
