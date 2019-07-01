import { combineReducers } from 'redux';

// reducers
import products from './products';
import basket from './product_cart';
import user from './user';

export default combineReducers({ products, basket, user });
