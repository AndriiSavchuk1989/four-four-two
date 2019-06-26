import axios from 'axios';
import {
  FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR, FETCH_PRODUCT_BY_ID_START, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_ERROR
} from './actions_types';

export const fetchAllProducts = () => dispatch => {
  dispatch({
    type: FETCH_ALL_PRODUCTS_START
  });

  axios
    .get('http://www.mocky.io/v2/5cec45f3330000165f6d7a2d')
    .then(response => {
      console.log(response);
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

export const getProductById = id => dispatch => {
  dispatch({
    type: FETCH_PRODUCT_BY_ID_START
  });

  axios
    .get('http://www.mocky.io/v2/5cec45f3330000165f6d7a2d')
    .then(response => {
      console.log('get product___', response);
      const product = response.data.find(prod => prod.id === id);

      console.log('product___', product);
      dispatch({
        type: FETCH_PRODUCT_BY_ID_SUCCESS,
        payload: product
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_PRODUCT_BY_ID_ERROR,
        payload: error.message
      });
    });
};
