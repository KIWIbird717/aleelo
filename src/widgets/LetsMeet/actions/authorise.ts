"use server";

import { serverApi } from "@/shared/lib/axios";
import { setCookie } from "cookies-next";
import { cookies } from "next/headers";

type ResponseType = {
  jwt: string;
  refreshToken: string;
};

export const authorize = async () => {
  const authorizationRes = await serverApi.post<ResponseType>("/auth/anonymous");
  return authorizationRes.data;
};
