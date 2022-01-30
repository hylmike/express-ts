import { DbService } from './db/dbService';
import { Container } from 'inversify';
import { UserService } from './user/user.service';
import { BookService } from './book/book.service';
import { LoggerService } from './util/loggerService';

export const container = new Container({
  defaultScope: 'Singleton'
})

container.bind(DbService).toSelf();
container.bind(UserService).toSelf();
container.bind(BookService).toSelf();
container.bind(LoggerService).toSelf();
