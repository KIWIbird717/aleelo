"use client";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import ErrorIcon from "@/app/images/svg/error.svg";
import { View } from "@/shared/layout/View";
import { useState } from "react";

export default function Home() {
  const [state, setstate] = useState(false);
  return (
    <View className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input placeholder={"input text"} error={state ? "Error" : undefined} />
      <Button onClick={() => setstate((state) => !state)} icon={<ErrorIcon />}>
        Button
      </Button>
    </View>
  );
}
