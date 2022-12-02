import { IBook } from './IBook';

export class Book implements IBook {
  name!: string;
  author!: string;
  price!: string;
  desc!: string;
  id!: number;
}