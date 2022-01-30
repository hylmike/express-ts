import { Connection, createConnection, getConnectionOptions, Repository } from "typeorm";
import { injectable } from "inversify";
import { User } from "../entity/user.entity";
import { Book } from "../entity/book.entity";

@injectable()
export class DbService {
  private _db: Connection | undefined;

  async connect() {
    try {
      const connectOptions = await getConnectionOptions();
      Object.assign(connectOptions, {entities: [User, Book]})
      this._db = await createConnection(connectOptions);
    } catch (err) {
      console.log("Error happed: ", err);
    }

    console.log("Database is connected");
  }

  get userRepo(): Repository<User> | undefined {
    return this._db?.getRepository(User);
  }

  get bookRepo(): Repository<Book> | undefined {
    return this._db?.getRepository(Book);
  }
}
