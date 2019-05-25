import axios from 'axios';
import { ADD_PRODUCT_TO_BASKET_START, ADD_PRODUCT_TO_BASKET_SUCCESS, ADD_PRODUCT_TO_BASKET_ERROR } from './actions_types';

export const addProductToBasket = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_BASKET_START
  });

  axios
    .get('http://www.mocky.io/v2/5ce9af9d330000aa38525ddc')
    .then(res => {
      dispatch({
        type: ADD_PRODUCT_TO_BASKET_SUCCESS,
        payload: res.data.products.filter(product => (product.id === id ? product : null))
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_PRODUCT_TO_BASKET_ERROR,
        payload: error.message
      });
    });
};
