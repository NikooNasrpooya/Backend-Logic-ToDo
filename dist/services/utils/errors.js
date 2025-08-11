export class ApiError extends Error {
    constructor(message, opts) {
        super(message);
        this.name = "ApiError";
        this.status = opts?.status;
        this.code = opts?.code;
        this.details = opts?.details;
    }
}
export function toApiError(err) {
    const isAxios = (e) => !!(e && e.isAxiosError);
    if (isAxios(err)) {
        const status = err.response?.status;
        const code = err.code;
        const msg = err.message || "Axios request failed";
        return new ApiError(msg, { status, code, details: err.response?.data ?? err.toJSON?.() });
    }
    if (err instanceof Error)
        return new ApiError(err.message);
    return new ApiError("Unknown error", { details: err });
}
