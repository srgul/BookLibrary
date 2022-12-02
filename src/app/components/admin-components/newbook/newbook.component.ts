import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent {

  newBookForm = new FormGroup({
    name: new FormControl(''),
    author: new FormControl(''),
    desc: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private bookService: BookService) {}
  
  onSubmit() {
    console.log(this.newBookForm.value)

    if (this.newBookForm.valid) {
      this.bookService.addBook(this.newBookForm.value).subscribe(res => {
        console.log(res)
      })
    }
  }
}
