import { api } from "./apiClient.js";
import { toApiError } from "./utils/errors.js";
/**
 * Service layer: all Todo-related calls live here.
 * Each function returns typed data and throws ApiError on failure.
 */
export async function getTodos(limit = 10) {
    try {
        const res = await api.get("/todos", { params: { _limit: limit } });
        return res.data;
    }
    catch (err) {
        throw toApiError(err);
    }
}
export async function getTodo(id) {
    try {
        const res = await api.get(`/todos/${id}`);
        return res.data;
    }
    catch (err) {
        throw toApiError(err);
    }
}
export async function createTodo(payload) {
    try {
        const res = await api.post("/todos", payload);
        return res.data;
    }
    catch (err) {
        throw toApiError(err);
    }
}
export async function updateTodo(id, patch) {
    try {
        // JSONPlaceholder supports PATCH; use PUT if your API prefers full updates
        const res = await api.patch(`/todos/${id}`, patch);
        return res.data;
    }
    catch (err) {
        throw toApiError(err);
    }
}
export async function deleteTodo(id) {
    try {
        await api.delete(`/todos/${id}`);
    }
    catch (err) {
        throw toApiError(err);
    }
}
