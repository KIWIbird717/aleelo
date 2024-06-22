import axios from "axios";

const isServer = typeof window === "undefined";

export const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// локализация и медиа
export const mediaApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MEDIA_BASE_URL,
  withCredentials: true,
});

serverApi.interceptors.request.use((config) => {
  if (!isServer) {
    const jwtToken = localStorage.getItem("jwt");
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});
