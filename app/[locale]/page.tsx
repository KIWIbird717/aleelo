"use client";

import { InitLoader } from "@/entities/InitLoader/InitLoader";
import { AuthorizationCheck } from "@/entities/AuthorizationCheck";
import React from "react";
import { View } from "@/shared/layout/View";

const isServer = typeof window === "undefined";

export default function MainPage() {
  return isServer ? (
    <InitLoader />
  ) : (
    <>
      <InitLoader />
      <AuthorizationCheck />
    </>
  );
}
