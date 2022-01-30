import { Book } from "../entity/book.entity";

export interface RegBookDto {
  title: string;
  catogory: string;
  description: string;
  userID: number;
}