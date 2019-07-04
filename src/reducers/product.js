import {
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_ERROR
} from '../actions/actions_types';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCT_BY_ID_START: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_PRODUCT_BY_ID_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload
      };
    }

    case FETCH_PRODUCT_BY_ID_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    }

    default: {
      return state;
    }
  }
};
