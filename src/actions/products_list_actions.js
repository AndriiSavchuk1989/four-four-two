import axios from 'axios';
import { FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR } from './actions_types';

export const fetchAllProducts = () => dispatch => {
  dispatch({
    type: FETCH_ALL_PRODUCTS_START
  });

  axios
    .get('../data/products.js')
    .then(response => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_SUCCESS,
        payload: response.data.products
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_ERROR,
        payload: error.message
      });
    });
}
