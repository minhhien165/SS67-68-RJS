import { combineReducers, createStore } from 'redux';
import { bookReducer } from './reducers/bookReducer';
import { filterReducer } from './reducers/filterReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
