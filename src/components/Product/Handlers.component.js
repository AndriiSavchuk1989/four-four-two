import React from 'react';
import Product from './Product.styled';

export const ProductsListButtons = () => {
  return (
    <Product.ButtonsWrapper>
      <Product.InfoButton>More info</Product.InfoButton>
      <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>
    </Product.ButtonsWrapper>
  )
};

export const ProductMoreInfoButton = () => {
  return (
    <Product.ButtonsWrapper>
      <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>
    </Product.ButtonsWrapper>
  )
};
