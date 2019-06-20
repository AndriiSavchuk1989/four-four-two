import { ADD_PRODUCT_TO_BASKET_SUCCESS, ADD_PRODUCT_TO_BASKET_ERROR } from '../actions/actions_types';

const initialState = {
  basket: [],
  count: 0,
  totalPrice: 0
};

export default ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET_SUCCESS:
      let tempBasket = [];
      if (state.basket.length) {
        tempBasket = [...state.basket];
        const index = tempBasket.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          ++tempBasket[index].quantity;
          return { ...state, basket: [...tempBasket], count: state.count + 1, totalPrice: state.totalPrice + action.payload.price };
        }
        else {
          tempBasket.push(action.payload);
          return { ...state, basket: [...tempBasket], count: state.count + 1, totalPrice: state.totalPrice + action.payload.price };
        }
      }
      return { ...state, basket: [...state.basket, action.payload], count: state.count + 1, totalPrice: state.totalPrice + action.payload.price };
    case ADD_PRODUCT_TO_BASKET_ERROR:
      return state;
    default:
      return state;
  }
};
