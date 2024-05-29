"use client";

import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import ErrorIcon from "@/app/images/svg/error.svg";
import { View } from "@/shared/layout/View";
import { useState } from "react";
import { ButtonIcon } from "@/shared/ui/ButtonIcon/ButtonIcon";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { CircularLoader } from "@/shared/ui/CIrcularLoader";
import { RadioGroup, RadioGroupContent, RadioGroupItem } from "@/shared/ui/Radio/Radio";
import { Select } from "@/shared/ui/Select/Select";
import { Slider } from "@/shared/ui/Slider/Slider";
import { Switch } from "@/shared/ui/Switch/Switch";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

export default function Home() {
  const [state, setstate] = useState(false);
  return (
    <View className="flex flex-col items-center justify-between p-24">
      <Input placeholder={"input text"} error={state ? "Error" : undefined} />
      <ButtonIcon icon={<ErrorIcon />} />
      <Checkbox />
      <div className="flex items-center gap-5">
        <CircularLoader value={50} variant="lg" />
        <CircularLoader value={50} variant="sm" />
      </div>
      <RadioGroup>
        <RadioGroupContent id="r1" text="radio" value="comfortable" />
        <RadioGroupContent id="r1" text="radio" value="comfortable" />
      </RadioGroup>
      <Select
        options={[
          { title: "title", value: "value" },
          { title: "title2", value: "value" },
          { title: "title3", value: "value" },
          { title: "title3", value: "value" },
          { title: "title3", value: "value" },
        ]}
      />
      <Slider />
      <Switch />
      <Textarea />
      <Button onClick={() => setstate((state) => !state)} icon={<ErrorIcon />}>
        Button
      </Button>
    </View>
  );
}
