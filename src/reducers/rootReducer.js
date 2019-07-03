import { combineReducers } from 'redux';

// reducers
import products from './products';
import basket from './product_cart';
import user from './user';
import product from './product';

export default combineReducers({
  products,
  basket,
  user,
  product
});
