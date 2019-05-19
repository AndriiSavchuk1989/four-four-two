import {
  FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR,
  FETCH_PRODUCT_BY_ID_START, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_ERROR
}
from '../actions/actions_types';

const initialState = {
  products: [],
  isLoading: false,
  error: null
};

export const products_reducer = (state = initialState, action) => {
  switch (action) {
    case FETCH_ALL_PRODUCTS_START:
      return { ...state, isLoading: true };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      if (!state.products.length) {
        return {
          ...state,
          products: [ ...state.products, ...action.payload.products],
          isLoading: false
        };
      }
      return state;
    case FETCH_ALL_PRODUCTS_ERROR:
      return { ...state, isLoading: true, error: action.payload.products };
    default: return state;
  }
};
