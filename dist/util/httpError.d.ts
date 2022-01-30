import { BaseError } from "./BaseError";
export declare class Api404Error extends BaseError {
    constructor(name: string, statusCode?: number, isOperational?: boolean, description?: string);
}
export declare class Api401Error extends BaseError {
    constructor(name: string, statusCode?: number, isOperational?: boolean, description?: string);
}
export declare class Api409Error extends BaseError {
    constructor(name: string, statusCode?: number, isOperational?: boolean, description?: string);
}
export declare class ApiDBError extends BaseError {
    constructor(name: string, statusCode?: number, isOperational?: boolean, description?: string);
}
