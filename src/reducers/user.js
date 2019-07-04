import { SET_USER } from '../actions/actions_types';

const initialState = {
  data: {
    name: '',
    surname: '',
    email: ''
  },
  isLoggedIn: false
};

export default (state = initialState, { type, payload }) => {
  if (type === SET_USER) {
    return {
      ...state,
      data: {
        name: payload.name,
        surname: payload.surname,
        email: payload.email
      },
      isLoggedIn: true
    };
  }

  return {
    ...state,
    isLoggedIn: state.isLoggedIn
  };
};
