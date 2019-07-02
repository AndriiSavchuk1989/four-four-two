import axios from 'axios';
import {
  ADD_PRODUCT_TO_BASKET_SUCCESS, ADD_PRODUCT_TO_BASKET_ERROR,
  INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY,
  SET_USER, RESET_STATE
} from './actions_types';

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

export const decreaseProductQuantity = id => dispatch => {
  dispatch({
    type: DECREASE_PRODUCT_QUANTITY,
    payload: id
  });
};

export const increaseProductQuantity = id => dispatch => {
  dispatch({
    type: INCREASE_PRODUCT_QUANTITY,
    payload: id
  });
};

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: { ...user }
  });
};

export const resetBasket = () => dispatch => {
  dispatch({
    type: RESET_STATE
  });
};
