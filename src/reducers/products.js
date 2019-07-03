import {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_ERROR
} from '../actions/actions_types';

const initialState = {
  products: [],
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
      return { ...state, products: action.payload, isLoading: false };
    case FETCH_ALL_PRODUCTS_ERROR:
      return { ...state, isLoading: true, error: action.payload };
    default:
      return state;
  }
};
