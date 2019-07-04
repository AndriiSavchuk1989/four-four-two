import React from 'react';

// styles
import BasketWrapper from './Basket.styled';

export const EmptyBasketComponent = () => {
  return (
    <BasketWrapper.EmptyBasket>
      Sorry, Your basket is empty. Please make your order
    </BasketWrapper.EmptyBasket>
  );
};
