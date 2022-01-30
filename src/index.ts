import 'dotenv/config';
import 'reflect-metadata';
import { App } from "./app";
import './user/user.controller';
import './book/book.controller';

export async function bootStrap() {
  new App().setup();
}

bootStrap();
