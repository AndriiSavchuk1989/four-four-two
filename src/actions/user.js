import { SET_USER } from './actions_types';

export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: { ...user }
  });
};
