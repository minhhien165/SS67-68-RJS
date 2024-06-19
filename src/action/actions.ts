// src/actions.ts
import { Book } from '../types';

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const TOGGLE_BOOK_STATUS = 'TOGGLE_BOOK_STATUS';
export const SET_FILTER = 'SET_FILTER';

export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id: number) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const updateBook = (book: Book) => ({
  type: UPDATE_BOOK,
  payload: book,
});

export const toggleBookStatus = (id: number) => ({
  type: TOGGLE_BOOK_STATUS,
  payload: id,
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});
