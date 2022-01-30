export class BaseError extends Error {
  name: string;
  statusCode: number;
  isOperational: boolean;
  
  constructor(
    name: string,
    statusCode: number,
    isOperational: boolean,
    description: string
  ) {
    super(description);
    //new.target.* = constructor, this still not equal BaseError in contructor
    Object.setPrototypeOf(this, new.target.prototype);  
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);          //create .stack property for BaseError
  }
}

export const httpStatusCodes = {
  OK: 200,
  CREATED_OK: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  PAYLOAD_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
}
