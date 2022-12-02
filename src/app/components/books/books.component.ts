import { IBook } from './../../models/IBook';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(public bookService: BookService, private store: Store<IBook>) {}

  ngOnInit(): void {
    this.bookService.getBooks()
  }

  addToCart(book: Book) {
    console.log(book)
  }
}
