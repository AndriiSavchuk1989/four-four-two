import {
  ADD_PRODUCT_TO_BASKET_SUCCESS,
  ADD_PRODUCT_TO_BASKET_ERROR,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
  RESET_STATE
} from '../actions/actions_types';

const initialState = {
  data: [],
  count: 0,
  totalPrice: 0
};

export default (state = initialState, { type, payload }) => {
  let tempBasket = [];

  switch (type) {
    case ADD_PRODUCT_TO_BASKET_SUCCESS:
      if (state.data.length) {
        tempBasket = [...state.data];
        const index = tempBasket.findIndex(item =>
          item.id === payload.id);

        if (index !== -1) {
          tempBasket[index].quantity += 1;

          return {
            ...state,
            data: [...tempBasket],
            count: state.count + 1,
            totalPrice: state.totalPrice + payload.price
          };
        }

        tempBasket.push(payload);

        return {
          ...state,
          data: [...tempBasket],
          count: state.count + 1,
          totalPrice: state.totalPrice + payload.price
        };
      }

      return {
        ...state,
        data: [...state.data, payload],
        count: state.count + 1,
        totalPrice: state.totalPrice + payload.price
      };
    case ADD_PRODUCT_TO_BASKET_ERROR:
      return state;

    case INCREASE_PRODUCT_QUANTITY:
      tempBasket = [...state.data];
      // eslint-disable-next-line no-case-declarations
      const idx = tempBasket.findIndex(product => product.id === payload);

      tempBasket[idx].quantity += 1;

      return {
        ...state,
        data: [...tempBasket],
        count: state.count + 1,
        totalPrice: state.totalPrice + tempBasket[idx].price
      };
    case DECREASE_PRODUCT_QUANTITY:
      tempBasket = [...state.data];
      // eslint-disable-next-line no-case-declarations
      const index = tempBasket.findIndex(product => product.id === payload);

      tempBasket[index].quantity -= 1;

      return {
        ...state,
        data: [...tempBasket],
        count: state.count - 1,
        totalPrice: state.totalPrice - tempBasket[index].price
      };
    case RESET_STATE:
      return {
        ...state,
        data: [],
        count: 0,
        totalPrice: 0
      };

    default:
      return state;
  }
};
