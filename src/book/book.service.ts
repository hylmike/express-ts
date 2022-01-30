import { injectable } from "inversify";
import { DbService } from "../db/dbService";
import { RegBookDto } from "../interface/RegBookDto";
import { ApiDBError } from "../util/httpError";
import { LoggerService } from "../util/loggerService";

@injectable()
export class BookService {
  constructor(
    private readonly _db: DbService,
    private readonly logger: LoggerService
  ) {}

  async registerBook(regBookDto: RegBookDto) {
    try {
      const user = await this._db.userRepo?.findOne(regBookDto.userID);
      let newBook = this._db.bookRepo?.create({
        title: regBookDto.title,
        catogory: regBookDto.catogory,
        description: regBookDto.description,
        user: user,
      });
      newBook = await newBook?.save();
      return newBook;
    } catch (err) {
      console.error(err);
    }
  }

  async getBook(id: number) {
    this.logger.info("Success get the book info");
    return await this._db.bookRepo?.findOne(id);
  }

  async getAllBooks() {
    try {
      const bookList = await this._db.bookRepo
        ?.createQueryBuilder("book")
        .leftJoinAndSelect("book.user", "user")
        .getMany();
      return bookList;
    } catch (err) {
      this.logger.error("Database query all books error: " + err);
      throw new ApiDBError("Database query all books error");
    }
  }
}
