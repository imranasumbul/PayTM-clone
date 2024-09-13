// types/api.ts or similar
export interface ApiResponse<T = null> {
    status: string;
    message: string;
    data?: T;
    error?: string;
    timestamp: string;
}
