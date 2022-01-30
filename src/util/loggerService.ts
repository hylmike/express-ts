import { injectable } from "inversify";
import winston, { Logger } from "winston";

@injectable()
export class LoggerService {
  private _logger!: Logger;

  setup() {
    this._logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.File({
          filename: "combined.log",
          level: "info",
        }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
      ],
    });

    if (process.env.NODE_ENV !== "production") {
      this._logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
          ),
        })
      );
    }
  }

  info(this: any, message: any, context?: string) {
    this._logger.info.apply(null, arguments);
  }

  warn(this: any, message: any, context?: string) {
    this._logger.warn.apply(null, arguments);
  }

  error(this: any, message: any, trace?: string, context?: string) {
    this._logger.error.apply(null, arguments);
  }
}
