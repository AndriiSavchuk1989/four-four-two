import * as React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';
import ProductsList from '../ProductsList/ProductsList.styled';
import BasketWrapper from './Basket.styled';

type PropsBasket = {
  basket?: any
};

type Props = {
  basket?: Array<Object>,
  count?: Number,
  totalPrice?: Number
};

const Basket = (props: PropsBasket) => {
  const { basket } = props;

  return (
    <BasketWrapper.Wrapper>
      <ProductsList.Wrapper type="basket">
        {basket.map(product => (
          <ProductComponent product={product} type="basket" />
        ))}
      </ProductsList.Wrapper>
    </BasketWrapper.Wrapper>
  );
};

const EmptyBasketComponent = () => {
  return (
    <BasketWrapper.EmptyBasket>Sorry, Your basket is empty</BasketWrapper.EmptyBasket>
  );
};

const BasketComponent = (props: Props) => {
  const { count, basket } = props;

  return (
    !count ?
      <EmptyBasketComponent />
      :
      <Basket basket={basket} />
  );
};

Basket.defaultProps = {
  basket: []
};

BasketComponent.defaultProps = {
  basket: [],
  count: 0,
  totalPrice: 0
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket,
  totalPrice: state.basket.totalPrice
});

export default connect(mapStateToProps)(BasketComponent);
