"use client";

import { View } from "@/shared/layout/View";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { Button, ButtonNS } from "@/shared/ui/Button/Button";
import { ButtonIcon, ButtonIconNS } from "@/shared/ui/ButtonIcon/ButtonIcon";
import { Checkbox } from "@/shared/ui/Checkbox/Checkbox";
import { CircularLoader } from "@/shared/ui/CIrcularLoader";
import { Input } from "@/shared/ui/Input";
import { RadioGroup, RadioGroupContent, RadioGroupItem } from "@/shared/ui/Radio/Radio";
import { Select } from "@/shared/ui/Select/Select";
import { Slider } from "@/shared/ui/Slider/Slider";
import { Switch } from "@/shared/ui/Switch/Switch";
import { Textarea } from "@/shared/ui/Textarea/Textarea";
import { BookHeart } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const telegram = useTelegram();
  telegram?.expand();
  telegram?.setHeaderColor("#B9CDCF");
  telegram?.setBackgroundColor("#B9CDCF");

  const [circularProgress, setCircularProgress] = useState(10);
  const [inputError, setInputError] = useState(false);
  const [sliderValue, setSliderValue] = useState(45);

  const handleValueChange = (newValue: number[]) => {
    setSliderValue(newValue[0]);
  };

  return (
    <View className="flex flex-col items-center gap-12 p-5 py-12">
      <div className="flex flex-col gap-3">
        <h1>Buttons</h1>
        <div className="flex flex-wrap gap-3">
          {["yellow", "orange", "green", "snow", "blue", "red"].map((variant) => (
            <Button
              className="w-[48%]"
              key={`button-${variant}`}
              variant={variant as ButtonNS.Props["variant"]}
            >
              {variant}
            </Button>
          ))}
        </div>
      </div>

      <div className="felx flex-col gap-3">
        <h1>Icon buttons</h1>
        <div className="flex flex-wrap gap-3">
          {["yellow", "orange", "deepBlue", "snow", "blue", "red"].map((variant) => (
            <ButtonIcon
              variant={variant as ButtonIconNS.Props["variant"]}
              key={`icon-button-${variant}`}
            >
              <BookHeart />
            </ButtonIcon>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Checkbox</h1>
        <div className="flex w-full  justify-center gap-5">
          <Checkbox checked={true} />
          <Checkbox checked={false} />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Circular loader</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <CircularLoader value={circularProgress} />
          <Button onClick={() => setCircularProgress((state) => (state < 100 ? state + 10 : 0))}>
            Add progress
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Innput</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <Input disabled={true} />
          <Input error={inputError} />
          <Button onClick={() => setInputError((state) => !state)}>Set error</Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Radio</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <RadioGroup>
            <RadioGroupContent id={"r1"} value={"something 1"} text={"something 1"} />
            <RadioGroupContent id={"r2"} value={"something 2"} text={"something 2"} />
            <RadioGroupContent id={"r3"} value={"something 3"} text={"something 3"} />
          </RadioGroup>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Select</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <Select
            options={[
              { title: "title", value: "value" },
              { title: "title2", value: "value2" },
              { title: "title3", value: "value3" },
              { title: "title3", value: "value4" },
              { title: "title3", value: "value5" },
            ]}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Slider</h1>
        <div className="flex w-full flex-col items-center justify-center gap-12">
          <Slider
            tooltip={true}
            onValueChange={handleValueChange}
            value={[sliderValue]}
            min={10}
            max={20}
          />
          <Slider progressBar tooltip={true} value={[circularProgress]} />
          <Button onClick={() => setCircularProgress((state) => (state < 100 ? state + 10 : 0))}>
            Add progress
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Switch</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <Switch />
          <Switch disabled checked />
          <Switch disabled />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3">
        <h1>Switch</h1>
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <Textarea rows={5} />
        </div>
      </div>

      <div className="min-h-[400px] w-full" />
    </View>
  );
}
