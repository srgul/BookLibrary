import { IBook } from './../models/IBook';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books!: Book[];

  constructor(private http: HttpClient) { }
  baseServiceUrl: string = "http://localhost:3000"

  getUsers() {
    return this.http.get(this.baseServiceUrl + "/users")
  }

  getBooks() {
    this.http.get<Book[]>(this.baseServiceUrl + "/books").subscribe((res: IBook[]) => {
      this.books = res
    })
  }

  addBook(params: any){
    return this.http.post(this.baseServiceUrl + "/books", params )
  }

  updateBook(book: IBook) {
    return this.http.put(this.baseServiceUrl + "/books/" + book.id, book)
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseServiceUrl + "/books/" + id)
  }
}
