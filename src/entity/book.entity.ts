import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('books')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn({type: "int"})
  id!: number;

  @Column({type: "varchar"})
  title!: string;

  @Column({type: "enum", enum: ['Romance', 'IT', 'Biology'], default: 'Romance'})
  catogory!: string;

  @Column({type: "varchar"})
  description!: string;

  @ManyToOne(()=>User, user=>user.books)
  user!: User
}