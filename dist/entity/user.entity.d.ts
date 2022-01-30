import { BaseEntity } from "typeorm";
import { Book } from "./book.entity";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    regTime: Date;
    books: Book[];
}
