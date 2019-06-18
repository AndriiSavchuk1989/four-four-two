import { combineReducers } from 'redux';

// reducers
import products from './products';
import basket from './product_cart';

export default combineReducers({ products, basket });
