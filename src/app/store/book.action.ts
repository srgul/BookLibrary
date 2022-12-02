import { Book } from '../models/Book';
import { createAction, props } from '@ngrx/store';

export const ADD_BOOK = ' [ADD BOOK] Book ';
export const REMOVE_BOOK = ' [REMOVE BOOK] Book ';

export const addBook = createAction(ADD_BOOK, props<Book>())
export const removeBook = createAction(REMOVE_BOOK, props<Book>())