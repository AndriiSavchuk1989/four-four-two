import axios from 'axios';
import { ADD_PRODUCT_TO_BASKET_SUCCESS, ADD_PRODUCT_TO_BASKET_ERROR } from './actions_types';

export const addProductToBasket = id => dispatch => {
  axios
    .get('http://www.mocky.io/v2/5cec45f3330000165f6d7a2d')
    .then(response => {
      const productToBasket = response.data.find(prod => prod.id === id);
      console.log('added product', productToBasket);
      dispatch({
        type: ADD_PRODUCT_TO_BASKET_SUCCESS,
        payload: productToBasket
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_PRODUCT_TO_BASKET_ERROR,
        payload: error.message
      });
    });
};
