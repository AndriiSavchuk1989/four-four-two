import axios from 'axios';
import {
  FETCH_PRODUCT_BY_ID_ERROR,
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS
} from './actions_types';

export const getProductById = id => dispatch => {
  dispatch({
    type: FETCH_PRODUCT_BY_ID_START
  });

  axios
    .get('http://www.mocky.io/v2/5d1678f20e00007ed2a1193f')
    .then(response => {
      const product = response.data.find(prod => prod.id === id);

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
