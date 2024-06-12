"use client";

import React, { useEffect } from "react";
import InitLoaderSvg from "@/app/images/init-loader/init-loader.svg";
import { Typography } from "../../shared/ui/Typography/Typography";
import styles from "./styles.module.scss";
import { cn } from "@/shared/lib/utils/cn";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const InitLoader = () => {
  const { status } = useSession();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    console.log({ status, path });
    if (status === "authenticated" || status === "unauthenticated") {
      router.push(`${path}/auth/signin`);
    }
  }, [status]);

  return (
    <section
      className={cn(
        "flex h-full w-full flex-col items-center justify-between py-6",
        styles["animate-slideIn"],
      )}
    >
      <div />
      <InitLoaderSvg />
      <Typography tag="h3" variant="title">
        My Soul Games
      </Typography>
    </section>
  );
};
