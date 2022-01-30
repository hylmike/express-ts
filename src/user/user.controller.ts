import { controller, httpPost, httpGet } from 'inversify-express-utils';
import { Request } from "express";

import { UserService } from "./user.service";

@controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @httpPost('/createUser')
  async createUser(req: Request) {
    return this.userService.createUser(req.body);
  }

  @httpGet('/all')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @httpGet('/profile/:id')
  async getUser(req: Request) {
    return this.userService.getUser(Number(req.params.id));
  }

  async updateUser(id: string) {}
}
