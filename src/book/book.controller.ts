import { Request } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';

import { BookService } from './book.service';

@controller('/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @httpPost('/regbook')
  async registerBook(req: Request) {
    return this.bookService.registerBook(req.body);
  }

  @httpGet('/get/:id')
  async getBook(req: Request) {
    return this.bookService.getBook(Number(req.params.id));
  }

  @httpGet('/all')
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }
}
