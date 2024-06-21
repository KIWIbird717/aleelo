import { CSSProperties, FC, JSXElementConstructor, useEffect } from "react";
import { Map } from "../func/cells";
import { AnimatePresence, useAnimate } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ButtonNS } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/utils/cn";
import dynamic from "next/dynamic";
import Fishka from "@/public/images/svg/map/Fishka.svg";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type CellInfoType = {
  title: string;
} & Omit<Map.CellType, "icon" | "className">;
export type CellProps = {
  id: number;
  className: string;
  style?: CSSProperties;
  isActive: boolean;
  href: Url;
  icon: JSXElementConstructor<Partial<SVGElement>>;
  onClick?: (cell: CellInfoType, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

export const Cell: FC<CellProps> = (props) => {
  const [scope, animate] = useAnimate();
  const t = useTranslations();
  const title = t(`cells_${props.id}_title`);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const cellInfo: CellInfoType = {
      title,
      id: props.id,
    };
    props.onClick && props.onClick(cellInfo, event);
  };

  const handleTouch = () => {
    animate([
      [scope.current, { scale: 0.8 }, { duration: ButtonNS.halfAnimDuration }],
      [scope.current, { scale: 1 }, { duration: ButtonNS.halfAnimDuration }],
    ]);
  };

  return (
    <Link
      href={props.href}
      prefetch={props.isActive}
      ref={scope}
      style={props.style}
      onClick={handleClick}
      onTouchStart={handleTouch}
      className={cn(
        "relative box-border flex aspect-square w-full items-center justify-center rounded-[10px] border-[1px] border-[#295962] pb-[8px]",
        props.isActive && "border-[2px] border-[#F6E6B2]",
        props.className,
      )}
    >
      <AnimatePresence>
        {props.isActive && (
          <MotionDiv
            className="absolute top-[-30%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Fishka />
          </MotionDiv>
        )}
      </AnimatePresence>

      <props.icon />

      <h6
        className="absolute right-[4px] top-[4px] w-full text-end text-[12px] font-medium leading-[12px]"
        style={{ textShadow: "0px 2px 3px rgba(255, 255, 255, 0.3)" }}
      >
        {props.id}
      </h6>
      <h6
        className="absolute bottom-[4px] w-full break-words px-[3.1px] text-center text-[9px] leading-[10px]"
        style={{ textShadow: "0px 2px 3px rgba(255, 255, 255, 0.3)" }}
      >
        {title}
      </h6>
    </Link>
  );
};
