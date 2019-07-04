import { combineReducers } from 'redux';

// reducers
import products from './products';
import basket from './product_cart';
import user from './user';
import product from './product';
import search from './search';

export default combineReducers({
  products,
  basket,
  user,
  product,
  search
});
