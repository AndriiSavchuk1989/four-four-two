import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_ERROR
} from './actions_types';

export const fetchAllProducts = () => dispatch => {
  dispatch({
    type: FETCH_ALL_PRODUCTS_START
  });

  axios
    .get('http://www.mocky.io/v2/5d1678f20e00007ed2a1193f')
    .then(response => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_SUCCESS,
        payload: Array.from(response.data)
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_ALL_PRODUCTS_ERROR,
        payload: error.message
      });
    });
};
