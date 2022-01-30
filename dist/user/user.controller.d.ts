import { Request } from "express";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(req: Request): Promise<import("../entity/user.entity").User>;
    getAllUsers(): Promise<import("../entity/user.entity").User[]>;
    getUser(req: Request): Promise<import("../entity/user.entity").User | undefined>;
    updateUser(id: string): Promise<void>;
}
