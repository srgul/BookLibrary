import { Book } from './../models/Book';
import { createReducer, on, State } from '@ngrx/store';
import { removeBook, addBook } from './book.action';

// export const initialState = 0;
export interface IState {
  data: Book[];
}

export const initialBookState: IState = {
  data: Array<Book>()
}

export const bookReducer = createReducer(initialBookState,
  on(addBook, (state: any, book) => {
      const newState: IState = {
          data: [...state.data, book]
      }
      return newState;
  }),

  on(removeBook, (state: any, book) => {
      const deleteBook = state.data.find((b:any) => b.id == book.id);
      const deleteBookIndexNo = state.data.indexOf(deleteBook)
      const newState: IState = {
          data: [...state.data]
      };
      newState.data.splice(deleteBookIndexNo, 1);
      return newState;
  })
);
