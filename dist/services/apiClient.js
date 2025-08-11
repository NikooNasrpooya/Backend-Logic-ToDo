import axios from "axios";
// Single axios instance with sensible defaults.
// Swap baseURL to target any other public API.
export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10_000
});
// Example: simple request/response logging (non-noisy)
api.interceptors.request.use((config) => {
    // You can add headers, auth, correlation IDs, etc. here
    return config;
});
api.interceptors.response.use((res) => res, (err) => Promise.reject(err));
