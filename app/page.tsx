"use client";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import ErrorIcon from "@/app/images/svg/error.svg";
import { View } from "@/shared/layout/View";

export default function Home() {
  return (
    <View className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input placeholder={"input text"} />
      <Button icon={<ErrorIcon />}>Button</Button>
    </View>
  );
}
