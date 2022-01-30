import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { Book } from "../entity/book.entity";
export declare class DbService {
    private _db;
    connect(): Promise<void>;
    get userRepo(): Repository<User> | undefined;
    get bookRepo(): Repository<Book> | undefined;
}
