import * as React from 'react';

// styles
import BasketWrapper from './Basket.styled';
import ProductsList from '../ProductsList/ProductsList.styled';

// components
import ProductComponent from '../Product/Product.component';

type Props = {
  basket?: Array<Object>,
  isVisible?: Boolean
};

export const Basket = (props: Props) => {
  const { basket, isVisible } = props;

  return (
    <BasketWrapper.Wrapper isVisible={isVisible}>
      <ProductsList.Wrapper type="basket">
        {basket.map(product => (
          <ProductComponent key={product.id} product={product} type="basket" />
        ))}
      </ProductsList.Wrapper>
    </BasketWrapper.Wrapper>
  );
};

Basket.defaultProps = {
  basket: [],
  isVisible: true
};
