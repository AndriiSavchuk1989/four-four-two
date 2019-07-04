import { SET_SEARCH, REMOVE_SEARCH } from './actions_types';

export const ableToSearch = () => dispatch => {
  dispatch({
    type: SET_SEARCH
  });
};

export const unableToSearch = () => dispatch => {
  dispatch({
    type: REMOVE_SEARCH
  });
};
