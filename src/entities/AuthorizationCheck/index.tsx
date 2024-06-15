"use client";

import { useEffect } from "react";
import { getData } from "./actions/getProfile";
import { serverSideRedirect } from "@/shared/lib/utils/serverSideRedirect";
import useRequest from "@/shared/lib/hooks/useRequest";
import { usePathname } from "next/navigation";

export const AuthorizationCheck = () => {
  const path = usePathname();

  useRequest(async () => {
    const myProfile = await getData();
    console.log({ myProfile });
    if (!myProfile) {
      return serverSideRedirect(`${path}/auth/onboarding`);
    }
  }, [path]);

  return null;
};
