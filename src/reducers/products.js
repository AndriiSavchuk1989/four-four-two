import {
  FETCH_ALL_PRODUCTS_START,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_ALL_PRODUCTS_ERROR
} from '../actions/actions_types';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_PRODUCTS_START:
      return {
        ...state,
        data: [],
        isLoading: true,
        error: null
      };

    case FETCH_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: null
      };

    case FETCH_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};
