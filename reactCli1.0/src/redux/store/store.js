import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const initialState = {};

export const store = createStore(rootReducers, initialState, applyMiddleware(...[thunk]))