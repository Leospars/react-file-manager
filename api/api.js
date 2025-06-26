import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_VITE_API_BASE_URL,
});

console.log("Server running at: ", process.env.EXPO_PUBLIC_VITE_API_BASE_URL);