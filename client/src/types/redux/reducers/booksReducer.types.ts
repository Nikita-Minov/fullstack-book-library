export interface BooksState {
  bookName: string;
  bookAge: number;
  books: string[];
}

/* eslint-disable no-unused-vars */

export enum UserActionTypes {
  SET_BOOK = 'SET_BOOK',
  SET_BOOKS = 'SET_BOOKS',
}
/* eslint-enable no-unused-vars */

interface SetBookAction {
  type: UserActionTypes.SET_BOOK,
  payload: {
    bookName: string;
    bookAge: number;
  }
}

interface SetBooksAction {
  type: UserActionTypes.SET_BOOKS,
  payload: string[];
}

export type Action = SetBookAction | SetBooksAction;
