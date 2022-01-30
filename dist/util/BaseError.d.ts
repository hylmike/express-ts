export declare class BaseError extends Error {
    name: string;
    statusCode: number;
    isOperational: boolean;
    constructor(name: string, statusCode: number, isOperational: boolean, description: string);
}
export declare const httpStatusCodes: {
    OK: number;
    CREATED_OK: number;
    BAD_REQUEST: number;
    UNAUTHORIZED: number;
    NOT_FOUND: number;
    CONFLICT: number;
    PAYLOAD_TOO_LARGE: number;
    INTERNAL_SERVER_ERROR: number;
    SERVICE_UNAVAILABLE: number;
};
