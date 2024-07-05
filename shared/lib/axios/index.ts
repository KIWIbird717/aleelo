import axios from "axios";
import { getCookie } from "cookies-next";

const isServer = typeof window === "undefined";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// локализация и медиа
export const mediaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_BASE_URL,
  withCredentials: true,
});

serverApi.interceptors.request.use(async (config) => {
  if (!isServer) {
    let jwtToken = getCookie("jwt");
    if (!jwtToken && isServer) {
      const { cookies } = await import("next/headers");
      jwtToken = cookies().get("jwt")?.value;
    }
    if (!jwtToken && !isServer) {
      jwtToken = localStorage.getItem("jwt") as string;
    }

    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});
