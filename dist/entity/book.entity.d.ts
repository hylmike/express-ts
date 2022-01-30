import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
export declare class Book extends BaseEntity {
    id: number;
    title: string;
    catogory: string;
    description: string;
    user: User;
}
