import axios from 'axios';
import { ADD_PRODUCT_TO_BASKET_SUCCESS, ADD_PRODUCT_TO_BASKET_ERROR } from './actions_types';

export const addProductToBasket = id => dispatch => {
  axios
    .get('http://www.mocky.io/v2/5d1678f20e00007ed2a1193f')
    .then(response => {
      const productToBasket = response.data.find(prod => prod.id === id);

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
