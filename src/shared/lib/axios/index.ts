import axios from "axios";
import { getCookie } from "cookies-next";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// локализация и медия
export const mediaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_BASE_URL,
});

serverApi.interceptors.request.use((config) => {
  const token = getCookie("jwt");
  console.log({ token });
  return config;
});
