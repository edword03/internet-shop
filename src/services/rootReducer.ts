import { combineReducers } from 'redux';
import { cartReducer } from './сart/cart-reducer';

export const rootReducer = combineReducers({ cart: cartReducer });
