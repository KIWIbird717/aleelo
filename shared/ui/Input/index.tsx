import { cn } from "../../lib/utils/cn";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import React, {
  ComponentProps,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ErrorIcon from "@/public/images/svg/error.svg";
import styles from "./styles.module.scss";

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div));

type InputRefType = HTMLInputElement | null;
type Props = {
  error?: boolean;
  disabled?: boolean;
  classNameInput?: string;
  icon?: ReactNode;
  isChat?: boolean;
  setFocus?: () => void;
  setBlur?: () => void;
  onClickButton?: () => void;
} & ComponentProps<"input">;

export const Input = forwardRef<InputRefType, Props>((props, ref) => {
  const {
    setBlur,
    setFocus,
    disabled,
    error,
    icon,
    classNameInput,
    onClickButton,
    isChat,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<InputRefType>(null);
  useImperativeHandle<InputRefType, InputRefType>(ref, () => inputRef.current, []);

  const handleFocus = () => {
    if (setFocus) setFocus();
    setIsFocused(true);
  };
  const handleBlur = () => {
    if (setBlur) setBlur();
    setIsFocused(false);
  };

  return (
    <div
      className={cn(
        isFocused && "shadow-inputActive transition-all duration-200 ease-out",
        "relative z-[10] h-[50px] w-full overflow-hidden rounded-full bg-turquoise-400 p-[2px]",
        error && "bg-gradient-border-error",
        disabled && "opacity-50 shadow-none",
      )}
    >
      <input
        ref={inputRef}
        disabled={disabled}
        className={cn(
          "absolute left-[2px] top-[2px] z-[20] h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-full bg-white pl-[25px] pr-[25px] text-[16px] leading-[19.5px] outline-none transition-all duration-200 ease-out",
          styles.inputShadow,
          error && `pr-[61px] ${styles.inputShadowError}`,
          icon && "pr-[61px]",
          disabled && `text-mint-950 shadow-none placeholder:text-mint-950`,
          classNameInput,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {icon && (
        <button
          className="absolute right-[20px] top-[13px] z-[21] cursor-pointer"
          type={"button"}
          onClick={onClickButton}
        >
          {icon}
        </button>
      )}
      <AnimatePresence>
        {error && !disabled && (
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute right-[20px] top-[13px] z-[21] cursor-pointer"
          >
            <ErrorIcon />
          </MotionDiv>
        )}
      </AnimatePresence>
      {/*<AnimatePresence>*/}
      {/*  {!isFocused && !props.error && (*/}
      {/*    <MotionDiv*/}
      {/*      initial={{ scaleY: 0 }}*/}
      {/*      animate={{ scaleY: 1 }}*/}
      {/*      exit={{ scaleY: 0 }}*/}
      {/*      className="fade-in absolute left-0 top-[40%] z-[15] h-[100%] w-full origin-bottom bg-gradient-to-t from-white"*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</AnimatePresence>*/}
    </div>
  );
});

Input.displayName = Input.name;
