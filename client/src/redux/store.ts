import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import booksReducer from './reducers/booksReducer';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';

const composeEnhancers =
 (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
  books: booksReducer,
  users: usersReducer,
}), composeEnhancers(applyMiddleware(thunk)));

export default store;
