import axios, { type AxiosInstance } from "axios";

// Single axios instance with sensible defaults.

export const api: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10_000
});

// Example: simple request/response logging (non-noisy)
api.interceptors.request.use((config) => {
  // You can add headers, auth, correlation IDs, etc. here
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);
