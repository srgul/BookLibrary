import { removeBook } from '../../store/book.action';
import { IBook } from './../../models/IBook';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  auth: any;
  books: any;
  book!: Observable<string>
  count!: number;

  constructor(private store: Store<IBook>, private router: Router) {
    if (localStorage.getItem('token')) {
      this.auth = true;
    }
  }

  ngOnInit(): void {
    this.book =this.store.select('name');
    console.log(this.book)

    this.store.select("name").subscribe(book => {
      this.books = book
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
}
