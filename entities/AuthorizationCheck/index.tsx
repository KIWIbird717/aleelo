"use client";

import { serverSideRedirect } from "../../shared/lib/utils/serverSideRedirect";
import useRequest from "../../shared/lib/hooks/useRequest";
import { usePathname } from "next/navigation";
import { UserService } from "@/shared/lib/services/user";

export const AuthorizationCheck = () => {
  const path = usePathname();

  useRequest(async () => {
    try {
      const myProfile = await UserService.profile();
      if (!myProfile) {
        return serverSideRedirect(`${path}/onboarding`);
      }

      return serverSideRedirect(`${path}/home`);
    } catch (error) {
      // если ошибка 401 (Unauthorized)
      return serverSideRedirect(`${path}/onboarding`);
    }
  }, [path]);

  return null;
};
