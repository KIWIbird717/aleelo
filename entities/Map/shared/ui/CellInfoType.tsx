import { CSSProperties, FC, JSXElementConstructor, useEffect } from "react";
import { Map } from "../func/cells";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { useAnimate } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ButtonNS } from "@/shared/ui/Button/Button";
import { cn } from "@/shared/lib/utils/cn";

type CellInfoType = {
  title: string;
} & Omit<Map.CellType, "icon" | "className">;
type CellProps = {
  id: number;
  className: string;
  style?: CSSProperties;
  icon: JSXElementConstructor<Partial<SVGElement>>;
  onClick?: (cell: CellInfoType, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const Cell: FC<CellProps> = (props) => {
  const logger = new Logger(Cell.name);
  const [scope, animate] = useAnimate();
  const t = useTranslations();
  const title = t(`cells_${props.id}_title`);

  const locale = useLocale();
  const router = useRouter();
  const redirectLink = `/${locale}/practice/${props.id}`;

  useEffect(() => {
    router.prefetch(redirectLink);
  }, [redirectLink, router]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    animate([
      [scope.current, { scale: 0.8 }, { duration: ButtonNS.halfAnimDuration }],
      [scope.current, { scale: 1 }, { duration: ButtonNS.halfAnimDuration }],
    ]);

    const cellInfo: CellInfoType = {
      title,
      id: props.id,
    };
    props.onClick && props.onClick(cellInfo, event);

    router.push(redirectLink);
  };

  return (
    <button
      ref={scope}
      style={props.style}
      onClick={handleClick}
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[10px] border-[1px] border-[#295962] pb-[8px]",
        props.className,
      )}
    >
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
    </button>
  );
};
