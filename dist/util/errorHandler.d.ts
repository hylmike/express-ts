import { NextFunction, Request, Response } from "express";
import { BaseError } from "./BaseError";
declare function logError(err: Error | BaseError): void;
declare function logErrorMiddleware(err: Error | BaseError, req: Request, res: Response, next: NextFunction): void;
declare function returnError(err: Error | BaseError, req: Request, res: Response, next: NextFunction): void;
declare function isOperationalError(err: Error | BaseError): boolean;
export { logError, logErrorMiddleware, returnError, isOperationalError };
