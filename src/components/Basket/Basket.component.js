import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';
import ProductsList from '../ProductsList/ProductsList.styled';

const Basket = props => {
  const { basket } = props;
  return (
    <ProductsList.Wrapper>
      {basket.map(product => (
        <ProductComponent product={product} type='basket' />
      ))}
    </ProductsList.Wrapper>
  )
};

const BasketComponent = props => {
  const { count, basket, totalPrice } = props;
  console.log(totalPrice);
  return (
    !count ? <div>Empty</div> : <Basket basket={basket} />
  )
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket,
  totalPrice: state.basket.totalPrice
});

export default connect(mapStateToProps)(BasketComponent);
