import { SET_FILTER } from '../../action/actions';
import { Action } from '../../types';

const initialState = {
  books: [],
  filter: 'ALL',
};

export const filterReducer = (state: string = initialState.filter, action: Action): string => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
    default:
      return state;
  }
};
