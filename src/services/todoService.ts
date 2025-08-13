import { api } from "./apiClient.js";
import type { NewTodo, Todo, UpdateTodo } from "./types/todo.js";
import { toApiError } from "./utils/errors.js";

/**
 * Service layer: all Todo-related calls live here.
 * Each function returns typed data and throws ApiError on failure.
 */
export async function getTodos(limit = 10): Promise<Todo[]> {
  try {
    const res = await api.get<Todo[]>("/todos", { params: { _limit: limit } });
    return res.data;
  } catch (err) {
    throw toApiError(err);
  }
}

export async function getTodo(id: number): Promise<Todo> {
  try {
    const res = await api.get<Todo>(`/todos/${id}`);
    return res.data;
  } catch (err) {
    throw toApiError(err);
  }
}

export async function createTodo(payload: NewTodo): Promise<Todo> {
  try {
    const res = await api.post<Todo>("/todos", payload);
    return res.data;
  } catch (err) {
    throw toApiError(err);
  }
}

export async function updateTodo(id: number, patch: UpdateTodo): Promise<Todo> {
  try {
    
    const res = await api.patch<Todo>(`/todos/${id}`, patch);
    return res.data;
  } catch (err) {
    throw toApiError(err);
  }
}

export async function deleteTodo(id: number): Promise<void> {
  try {
    await api.delete(`/todos/${id}`);
  } catch (err) {
    throw toApiError(err);
  }
}
