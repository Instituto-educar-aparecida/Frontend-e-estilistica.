import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5173",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("jwt_token");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  },
);
