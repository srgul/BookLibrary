import { Routes } from '@angular/router';
import { NewbookComponent } from 'src/app/components/admin-components/newbook/newbook.component';
import { BooklistComponent } from 'src/app/components/admin-components/booklist/booklist.component';
import { UpdateBookComponent } from 'src/app/components/admin-components/update-book/update-book.component';

export const AdminRoutingModule: Routes = [
  {
    path: "",
    redirectTo: "books",
    pathMatch: 'full'
  },
  {
    path: "add-book",
    component: NewbookComponent
  },
  {
    path: "books",
    component: BooklistComponent,
  },
  {
    path: "book/:id",
    component: UpdateBookComponent
  }
];