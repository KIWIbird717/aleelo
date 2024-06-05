"use client";

import { View } from "@/shared/layout/View";
import { Select } from "@/shared/ui/Select/Select";
import { Switch } from "@/shared/ui/Switch/Switch";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

import { RadioGroup, RadioGroupContent } from "@/shared/ui/Radio/Radio";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { useEffect, useState } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input";
import { useAppDispatch, useAppSelector } from "@/shared/lib/redux-store/hooks";
import { UserSlice } from "@/shared/lib/redux-store/slices/user-slice/userSlice";

const options = [
  { title: "title", value: "value1" },
  { title: "title2", value: "value2" },
  { title: "title3", value: "value3" },
  { title: "title3", value: "value4" },
  { title: "title3", value: "value5" },
];

export default function Home() {
  const [boolean, setBoolean] = useState(true);
  const [sliderValue, setSliderValue] = useState(45);
  const userState = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();

  console.log({ userState });

  useEffect(() => {
    console.log({ userState });
    if (userState) return;
    dispatch(UserSlice.setUsername("Evgeniy"));
  }, [userState]);

  const handleValueChange = (newValue: number[]) => {
    setSliderValue(newValue[0]);
  };

  const onChangeHandler = (checked: boolean) => {
    setBoolean(checked);
  };

  const [isError, setIsError] = useState(false);
  const [setDisabled, setSetDisabled] = useState(false);

  return (
    <View className="flex flex-col items-center gap-2 p-12">
      <Input error={isError} disabled={setDisabled} />
      <div className="flex gap-2">
        <Button onClick={() => setIsError((state) => !state)}>Set error</Button>
        <Button onClick={() => setSetDisabled((state) => !state)}>Set disabled</Button>
      </div>
      <Input />

      <Checkbox checked={boolean} onCheckedChange={onChangeHandler} />

      <Slider
        tooltip={true}
        onValueChange={handleValueChange}
        value={[sliderValue]}
        min={10}
        max={20}
      />

      {/*  готово*/}
      <Textarea rows={3} />
      <div className={"flex flex-col gap-1"}>
        <Switch />
        <Switch disabled checked />
        <Switch disabled />
      </div>

      <RadioGroup defaultValue={"default"}>
        <RadioGroupContent id={"r1"} value={"default"} text={"Default"} />
        <RadioGroupContent id={"r2"} value={"comfortable"} text={"Comfortable"} />
      </RadioGroup>
      <Select options={options} />
    </View>
  );
}
