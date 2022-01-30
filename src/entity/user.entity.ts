import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "./book.entity";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 50, unique: true })
  username!: string;

  @Column({ type: "char", length: 100, select: false })
  password!: string;

  @Column({ type: "varchar", length: 50 })
  email!: string;

  @Column({ type: "datetime" })
  regTime!: Date;

  @OneToMany(() => Book, (book) => book.user)
  books!: Book[];
}
