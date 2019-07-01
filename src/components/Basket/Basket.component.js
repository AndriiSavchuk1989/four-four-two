import * as React from 'react';
import { connect } from 'react-redux';

// components
import ProductComponent from '../Product/Product.component';
import PinnedBlockComponent from '../PinnedBlock/PinnedBlock.component';

// styles
import ProductsList from '../ProductsList/ProductsList.styled';
import BasketWrapper from './Basket.styled';

type Props = {
  basket?: Array<Object>,
  count?: Number,
  totalPrice?: Number
};

const Basket = (props: Props) => {
  const { basket, count, totalPrice } = props;

  return (
    <BasketWrapper.Wrapper>
      <ProductsList.Wrapper type="basket">
        {basket.map(product => (
          <ProductComponent product={product} type="basket" />
        ))}
      </ProductsList.Wrapper>
      <PinnedBlockComponent count={count} totalPrice={totalPrice} />
    </BasketWrapper.Wrapper>
  );
};

const EmptyBasketComponent = () => {
  return (
    <BasketWrapper.EmptyBasket>Sorry, Your basket is empty</BasketWrapper.EmptyBasket>
  );
};

const BasketComponent = (props: Props) => {
  const { count, basket, totalPrice } = props;

  return (
    !count ?
      <EmptyBasketComponent />
      :
      <Basket basket={basket} count={count} totalPrice={totalPrice} />
  );
};

Basket.defaultProps = {
  basket: [],
  count: 0,
  totalPrice: 0
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
