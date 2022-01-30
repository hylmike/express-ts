import bcrypt from "bcryptjs";
import { injectable } from 'inversify';

import { User } from "../entity/user.entity";
import { DbService } from "../db/dbService";
import { CreateUserDto } from "../interface/CreateUserDto";
import { Api409Error } from "../util/httpError";

@injectable()
export class UserService {
  constructor(private readonly _db: DbService) {}

  async createUser(createUserDto: CreateUserDto) {
    let user = new User();
    user.username = createUserDto.username;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.email = createUserDto.email;
    user.regTime = new Date();

    try {
      user = await this._db.userRepo!.save(user);
      return user;
    } catch (err: any) {
      throw new Api409Error('Saving user data error');
    }
  }

  async getAllUsers() {
    return await this._db.userRepo!.find({});
  }

  async getUser(id: number) {
    return await this._db.userRepo!.findOne(id);
  }
}
