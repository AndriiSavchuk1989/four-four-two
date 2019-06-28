import * as React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';
import ProductsList from '../ProductsList/ProductsList.styled';
import BasketWrapper from './Basket.styled';

type PropsBasket = {
  basket?: any
};

type Props = {
  basket?: any,
  count?: any,
  totalPrice?: any
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

const BasketComponent = (props: Props) => {
  const { count, basket } = props;

  return (
    !count ?
      <div>Empty</div>
      :
      <Basket basket={basket} />
  );
};

Basket.defaultProps = {
  basket: null
};

BasketComponent.defaultProps = {
  basket: null,
  count: null,
  totalPrice: null
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket,
  totalPrice: state.basket.totalPrice
});

export default connect(mapStateToProps)(BasketComponent);
