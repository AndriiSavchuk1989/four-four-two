import { SET_SEARCH, REMOVE_SEARCH } from '../actions/actions_types';

const initialState = {
  isAbleToSearch: false
};

export default (state = initialState, { type }) => {
  if (type === SET_SEARCH) {
    return {
      ...state,
      isAbleToSearch: !state.isAbleToSearch
    };
  }

  if (type === REMOVE_SEARCH) {
    return {
      ...state,
      isAbleToSearch: !state.isAbleToSearch
    };
  }

  return {
    ...state
  };
};
