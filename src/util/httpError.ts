import { BaseError, httpStatusCodes } from "./BaseError";

export class Api404Error extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.NOT_FOUND,
    isOperational = true,
    description = "Resource not found"
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class Api401Error extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.UNAUTHORIZED,
    isOperational = true,
    description = "You are not authorized"
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class Api409Error extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.CONFLICT,
    isOperational = true,
    description = "Data conflict"
  ) {
    super(name, statusCode, isOperational, description);
  }
}

export class ApiDBError extends BaseError {
  constructor(
    name: string,
    statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR,
    isOperational = true,
    description = "Database server error"
  ) {
    super(name, statusCode, isOperational, description);
  }
}
