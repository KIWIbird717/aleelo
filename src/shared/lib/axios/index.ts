import axios from "axios";
import { getCookie } from "cookies-next";
import { Logger } from "@/shared/lib/utils/logger/Logger";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// локализация и медиа
export const mediaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_BASE_URL,
});

serverApi.interceptors.request.use((config) => {
  const token = getCookie("jwt");

  const logger = new Logger("serverApi.interceptors.request.use");
  logger.debug({ token });
  return config;
});
