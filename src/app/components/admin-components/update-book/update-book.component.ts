import { IBook } from './../../../models/IBook';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IBook,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      name: [this.data?.name || ""],
      author: [this.data?.author || ""],
      desc: [this.data?.desc || ""],
      price: [this.data?.price || ""],
      id: [this.data?.id]
    })
    console.log(this.data)
  }
  
  onSubmit() {
    console.log(this.bookForm.value)
    this.bookService.updateBook(this.bookForm.value).subscribe(res => {
      console.log(res)
      this.bookService.getBooks()
    })
  }

}
