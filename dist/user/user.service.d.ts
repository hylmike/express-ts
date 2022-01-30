import { User } from "../entity/user.entity";
import { DbService } from "../db/dbService";
import { CreateUserDto } from "../interface/CreateUserDto";
export declare class UserService {
    private readonly _db;
    constructor(_db: DbService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | undefined>;
}
