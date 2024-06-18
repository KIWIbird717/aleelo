"use client";

import VignetteBg from "@/public/images/backgrounds/vignette.jpg";
import GradientBg from "@/public/images/backgrounds/gradient.jpg";
import { useEffect, useState } from "react";

const variants = {
  gradient: GradientBg.src,
  vignette: VignetteBg.src,
  none: "",
};
type VariantType = keyof typeof variants;

/**
 * Измеение фонового изображение у body
 * Можно выбрать любое изображение из списка {@link variants}
 *
 * @param defaultVariant - изображение по умолчанию
 *
 * @example
 * export const Component = () => {
 *   useBackground('gradient') // установить bg при загрузке компонента
 *
 *   return (
 *     <div>Component</div>
 *   )
 * }
 *
 * export const Component = () => {
 *   const background = useBackground();
 *
 *   // изменить фон с помощью функции
 *   background('gradient')
 *   background('vignette')
 *   background('none')
 *
 *   return (
 *     <div>Component</div>
 *   )
 * }
 */
export const useBackground = (defaultVariant?: VariantType) => {
  const [variant, setVariant] = useState<VariantType>(defaultVariant || "none");

  useEffect(() => {
    const body = document.body;
    const image = `url(${variants[variant]})`;
    body.style.backgroundImage = image;
  }, [variant]);

  return setVariant;
};
