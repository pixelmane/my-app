import { combineReducers, legacy_createStore as createStore } from 'redux';
import { cardReducer } from './cardSlice';

export const store = createStore(combineReducers({
    card: cardReducer
}))