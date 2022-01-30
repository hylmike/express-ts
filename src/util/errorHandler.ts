import { NextFunction, Request, Response } from "express";
import { BaseError } from "./BaseError";

function logError(err: Error | BaseError) {
  console.error(err);
}

function logErrorMiddleware(
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logError(err);
  next(err);
}

function returnError(
  err: Error | BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof BaseError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send(err.message);
  }
}

function isOperationalError(err: Error | BaseError) {
  if (err instanceof BaseError) {
    return err.isOperational;
  } else {
    return false;
  }
}

export { logError, logErrorMiddleware, returnError, isOperationalError };
