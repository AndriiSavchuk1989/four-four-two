import {
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_ERROR
} from '../actions/actions_types';

const initialState = {
  product: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_ID_START: {
      return { ...state, isLoading: true };
    }

    case FETCH_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.payload
      };
    }

    case FETCH_PRODUCT_BY_ID_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
