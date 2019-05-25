import axios from 'axios';
import { FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR } from './actions_types';

export const fetchAllProducts = () => dispatch => {
  dispatch({
    type: FETCH_ALL_PRODUCTS_START
  });

  axios
    .get('http://www.mocky.io/v2/5ce9af9d330000aa38525ddc')
      .then(response => {
        console.log(response.data.products);
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
