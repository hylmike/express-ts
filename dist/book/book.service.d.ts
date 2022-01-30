import { DbService } from "../db/dbService";
import { RegBookDto } from "../interface/RegBookDto";
import { LoggerService } from "../util/loggerService";
export declare class BookService {
    private readonly _db;
    private readonly logger;
    constructor(_db: DbService, logger: LoggerService);
    registerBook(regBookDto: RegBookDto): Promise<import("../entity/book.entity").Book | undefined>;
    getBook(id: number): Promise<import("../entity/book.entity").Book | undefined>;
    getAllBooks(): Promise<import("../entity/book.entity").Book[] | undefined>;
}
