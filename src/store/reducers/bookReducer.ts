import { ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK, TOGGLE_BOOK_STATUS } from '../../action/actions';
import { Book, Action } from '../../types';

const initialState = {
  books: [],
  filter: 'ALL',
};

export const bookReducer = (state: Book[] = initialState.books, action: Action): Book[] => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case UPDATE_BOOK:
      return state.map(book => (book.id === action.payload.id ? action.payload : book));
    case TOGGLE_BOOK_STATUS:
      return state.map(book => (book.id === action.payload ? { ...book, status: !book.status } : book));
    default:
      return state;
  }
};
