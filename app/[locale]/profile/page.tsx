import { View } from "@/shared/layout/View";
import React from "react";
import { ProfilePage } from "@/widgets/ProfilePage";
import { UserService } from "@/shared/lib/services/user";

const getData = async () => {
  return "https://ui-avatars.com/api/size=128";
};

export default async function Profile() {
  const url = await getData();

  // TODO: Временно добавлено, для тестирования
  const deleteProfile = async () => {
    await UserService.deleteProfile();
    localStorage.clear();
  };

  return (
    <View backgroundEffect="gradient">
      {/*<button onClick={deleteProfile}>Удалить аккаунт</button>*/}
      <ProfilePage url={url} />
    </View>
  );
}
