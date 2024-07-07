import { type ComponentProps, FC } from "react";
import { cn } from "@/shared/lib/utils/cn";
import {
  AirIcon,
  AngryIcon,
  EarthIcon,
  FearIcon,
  FireIcon,
  HappyIcon,
  Level2Icon,
  Level4Icon,
  ManIcon,
  SadIcon,
  WaterIcon,
  WomanIcon,
} from "@/shared/ui/Icon/constants";


export namespace IconNS {
  //варианты иконок
  export const variants = {
    //energies
    man: {
      icon: <ManIcon />,
    },
    woman: {
      icon: <WomanIcon />,
    },

    //levels
    level2: {
      icon: <Level2Icon />,
    },
    level4: {
      icon: <Level4Icon />,
    },

    //emotions
    happy: {
      icon: <HappyIcon />,
    },
    fear: {
      icon: <FearIcon />,
    },
    sad: {
      icon: <SadIcon />,
    },
    angry: {
      icon: <AngryIcon />,
    },

    //elements
    earth: {
      icon: <EarthIcon />,
    },
    air: {
      icon: <AirIcon />,
    },
    fire: {
      icon: <FireIcon />,
    },
    water: {
      icon: <WaterIcon />,
    },
  } as const;

  // цвета иконок
  export const color = {
    blue: {
      className: "bg-button-gradient-blue shadow-elementBlue",
    },
    deepBlue: {
      className: "bg-button-gradient-deep-blue shadow-element",
    },
    red: {
      className: "bg-button-gradient-red shadow-elementRed",
    },
    orange: {
      className: "bg-button-gradient-orange shadow-elementOrange",
    },
    turquoise: {
      className: "bg-button-gradient-turquoise shadow-shadowGreen",
    },
    grey: {
      className: "bg-gradient-throw shadow-throw",
    },
    yellow: {
      className: "bg-button-gradient-yellow shadow-elementHappy",
    },
  } as const;

  // классы, которые используются всеми вариантами кнопок
  export const DEFAULT_CLASSES =
    "flex flex-col items-center justify-center w-[48px] h-[48px] rounded-full";


  export type IIconProps = {
    variant?: keyof typeof variants;
    color?: keyof typeof color;
    className?: string;
  } & ComponentProps<"button">;
}

export const Icon: FC<IconNS.IIconProps> = (
  {
    variant = "man",
    color = "deepBlue",
  },
) => {

  const CLASSNAME_VARIANTS = IconNS.variants[variant].icon;
  const CLASSNAME_COLOR = IconNS.color[color].className;

  return (
    <div className={cn(
      IconNS.DEFAULT_CLASSES,
      CLASSNAME_COLOR
    )
    }>
      {CLASSNAME_VARIANTS}
    </div>
  );
};