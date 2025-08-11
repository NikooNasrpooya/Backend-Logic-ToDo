import type { AxiosError } from "axios";

export class ApiError extends Error {
  status?: number;
  code?: string;
  details?: unknown;

  constructor(message: string, opts?: { status?: number; code?: string; details?: unknown }) {
    super(message);
    this.name = "ApiError";
    this.status = opts?.status;
    this.code = opts?.code;
    this.details = opts?.details;
  }
}

export function toApiError(err: unknown): ApiError {
  const isAxios = (e: any): e is AxiosError => !!(e && e.isAxiosError);
  if (isAxios(err)) {
    const status = err.response?.status;
    const code = err.code;
    const msg = err.message || "Axios request failed";
    return new ApiError(msg, { status, code, details: err.response?.data ?? err.toJSON?.() });
  }
  if (err instanceof Error) return new ApiError(err.message);
  return new ApiError("Unknown error", { details: err });
}
