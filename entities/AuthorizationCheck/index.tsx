"use client";

import { serverSideRedirect } from "../../shared/lib/utils/serverSideRedirect";
import useRequest from "../../shared/lib/hooks/useRequest";
import { usePathname } from "next/navigation";
import { serverApi } from "../../shared/lib/axios";

export const AuthorizationCheck = () => {
  const path = usePathname();

  useRequest(async () => {
    try {
      const myProfile = await serverApi.get("auth/profile");
      if (!myProfile) {
        return serverSideRedirect(`${path}/auth/onboarding`);
      }
      return serverSideRedirect(`${path}/home`);
    } catch (error) {
      // если ошибка 401 (Unauthorized)
      return serverSideRedirect(`${path}/auth/onboarding`);
    }
  }, [path]);

  return null;
};
