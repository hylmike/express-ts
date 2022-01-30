import { Request } from 'express';
import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    registerBook(req: Request): Promise<import("../entity/book.entity").Book | undefined>;
    getBook(req: Request): Promise<import("../entity/book.entity").Book | undefined>;
    getAllBooks(): Promise<import("../entity/book.entity").Book[] | undefined>;
}
