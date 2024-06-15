"use server";

import { serverApi } from "@/shared/lib/axios";

export const getData = async () => {
  try {
    const myProfile = await serverApi.get("/auth/profile");
    console.log({ myProfile });
    return myProfile.data;
  } catch (error) {
    return null;
  }
};
