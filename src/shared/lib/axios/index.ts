import axios from "axios";
import { getCookie } from "cookies-next";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import { store } from "../redux-store/store";

const isServer = typeof window === "undefined";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// локализация и медиа
export const mediaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_BASE_URL,
});

serverApi.interceptors.request.use((config) => {
  const logger = new Logger("serverApi.interceptors");
  if (!isServer) {
    const jwtToken = localStorage.getItem("jwt");
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});
