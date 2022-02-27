import {
  Action,
  BooksState,
  UserActionTypes,
} from '../../types/redux/reducers/booksReducer.types';

const initialState: BooksState = {
  bookName: 'Hello, world!',
  bookAge: 21,
  books: [],
};

const booksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SET_BOOK:
      return {
        ...state,
        bookName: action.payload.bookName,
        bookAge: action.payload.bookAge,
      };
    case UserActionTypes.SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
