import { MatDialog } from '@angular/material/dialog';
import { IBook } from './../../../models/IBook';
import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { UpdateBookComponent } from '../update-book/update-book.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {
  @Input() book!: IBook;

  booklist: any;

  constructor(public bookService: BookService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookService.getBooks();
  }

  openUpdateCardModal(book: IBook) {
    this.dialog.open(UpdateBookComponent, {
      width: '400px',
      data: book
    })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(res => {
      console.log(res)
      this.bookService.getBooks()
    })
  }
}
