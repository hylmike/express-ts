export declare class LoggerService {
    private _logger;
    setup(): void;
    info(this: any, message: any, context?: string): void;
    warn(this: any, message: any, context?: string): void;
    error(this: any, message: any, trace?: string, context?: string): void;
}
