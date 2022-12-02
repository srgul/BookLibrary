import { UserComponent } from './layouts/user/user.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { BooklistComponent } from './components/admin-components/booklist/booklist.component';
import { NewbookComponent } from './components/admin-components/newbook/newbook.component';
import { UpdateBookComponent } from './components/admin-components/update-book/update-book.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent,
    CartDetailsComponent,
    BooklistComponent,
    NewbookComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    StoreModule.forRoot({ book: bookReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
