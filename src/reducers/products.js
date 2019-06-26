import {
  FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, FETCH_ALL_PRODUCTS_ERROR,
  FETCH_PRODUCT_BY_ID_START, FETCH_PRODUCT_BY_ID_SUCCESS, FETCH_PRODUCT_BY_ID_ERROR
}
  from '../actions/actions_types';

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS_START:
      return {
        ...state, products: [], product: {}, isLoading: true, error: null
      };
    case FETCH_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };
    case FETCH_ALL_PRODUCTS_ERROR:
      return { ...state, isLoading: true, error: action.payload };
    case FETCH_PRODUCT_BY_ID_START:
      return { ...state, isLoading: true, error: null };

    case FETCH_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        product: action.payload
      };
    }

    case FETCH_PRODUCT_BY_ID_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
