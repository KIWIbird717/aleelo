import { type ComponentProps, FC } from "react";
import { cn } from "@/shared/lib/utils/cn";
import {
  AirIcon,
  AngryIcon,
  EarthIcon,
  FearIcon,
  FireIcon,
  HappyIcon,
  Level1Icon,
  Level2Icon,
  Level3Icon,
  Level4Icon,
  Level5Icon,
  Level6Icon,
  Level7Icon,
  Level8Icon,
  ManIcon,
  SadIcon,
  WaterIcon,
  WomanIcon,
} from "@/shared/ui/Icon/constants";

import {
  AirIcon100,
  AngryIcon100, EarthIcon100,
  FearIcon100, FireIcon100,
  HappyIcon100,
  Level1Icon100,
  Level2Icon100,
  Level3Icon100,
  Level4Icon100,
  Level5Icon100,
  Level6Icon100,
  Level7Icon100,
  Level8Icon100,
  ManIcon100, SadIcon100, WaterIcon100,
  WomanIcon100,

} from "@/shared/ui/ElementIcons";


export namespace IconNS {
  export const size = {
    small: {
      className: "",
    },
    medium: {
      className: "w-[48px] h-[48px]",
    },
    large: {
      className: "w-[100px] h-[100px]",
    },
  };

  //варианты иконок
  export const variants = {
    //energies
    man: {
      iconLarge: <ManIcon100 />,
      iconMedium: <ManIcon />,
      iconSmall: "",
    },
    woman: {
      iconMedium: <WomanIcon />,
      iconLarge: <WomanIcon100 />,
      iconSmall: "",
    },

    //levels
    level1: {
      iconLarge: <Level1Icon100 />,
      iconMedium: <Level1Icon />,
      iconSmall: "",
    },
    level2: {
      iconLarge: <Level2Icon100 />,
      iconMedium: <Level2Icon />,
      iconSmall: "",
    },
    level3: {
      iconLarge: <Level3Icon100 />,
      iconMedium: <Level3Icon />,
      iconSmall: "",
    },
    level4: {
      iconLarge: <Level4Icon100 />,
      iconMedium: <Level4Icon />,
      iconSmall: "",
    },
    level5: {
      iconLarge: <Level5Icon100 />,
      iconMedium: <Level5Icon />,
      iconSmall: "",
    },
    level6: {
      iconLarge: <Level6Icon100 />,
      iconMedium: <Level6Icon />,
      iconSmall: "",
    },
    level7: {
      iconLarge: <Level7Icon100 />,
      iconMedium: <Level7Icon />,
      iconSmall: "",
    },
    level8: {
      iconLarge: <Level8Icon100 />,
      iconMedium: <Level8Icon />,
      iconSmall: "",
    },

    //emotions
    happy: {
      iconLarge: <HappyIcon100 />,
      iconMedium: <HappyIcon />,
      iconSmall: "",
    },
    fear: {
      iconLarge: <FearIcon100 />,
      iconMedium: <FearIcon />,
      iconSmall: "",
    },
    sad: {
      iconLarge: <SadIcon100 />,
      iconMedium: <SadIcon />,
      iconSmall: "",
    },
    angry: {
      iconLarge: <AngryIcon100 />,
      iconMedium: <AngryIcon />,
      iconSmall: "",
    },

    //elements
    earth: {
      iconLarge: <EarthIcon100 />,
      iconMedium: <EarthIcon />,
      iconSmall: "",
    },
    air: {
      iconLarge: <AirIcon100 />,
      iconMedium: <AirIcon />,
      iconSmall: "",
    },
    fire: {
      iconLarge: <FireIcon100 />,
      iconMedium: <FireIcon />,
      iconSmall: "",
    },
    water: {
      iconLarge: <WaterIcon100 />,
      iconMedium: <WaterIcon />,
      iconSmall: "",
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
    "flex flex-col items-center justify-center rounded-full";


  export type IIconProps = {
    variant?: keyof typeof variants;
    color?: keyof typeof color;
    size?: keyof typeof size;
    className?: string;
  } & ComponentProps<"button">;
}

export const Icon: FC<IconNS.IIconProps> = (
  {
    variant = "man",
    color = undefined,
    size = "medium",
  },
) => {

  const ICON_VARIANTS = size === "medium"
    ? IconNS.variants[variant].iconMedium
    : size === "large"
      ? IconNS.variants[variant].iconLarge
      : IconNS.variants[variant].iconSmall;
  const CLASSNAME_SIZE = IconNS.size[size].className;
  const CLASSNAME_COLOR = color
    ? IconNS.color[color].className
    : undefined;

  return (
    <div className={cn(
      IconNS.DEFAULT_CLASSES,
      CLASSNAME_COLOR,
      CLASSNAME_SIZE,
    )
    }>
      {ICON_VARIANTS}
    </div>
  );
};