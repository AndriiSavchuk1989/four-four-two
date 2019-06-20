import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';
import ProductsList from '../ProductsList/ProductsList.styled';

const renderedItems = basket => {
  return (
    <ProductsList.Wrapper>
      {basket.map(item => (
        <ProductComponent key={item.id} product={item} type='basket' />
      ))}
    </ProductsList.Wrapper>
  )
};

const BasketComponent = (props) => {
  const { count, basket, totalPrice } = props;
  console.log(totalPrice);
  return (
    !count ? <div>Empty</div> : renderedItems(basket)
  )
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket,
  totalPrice: state.basket.totalPrice
});

export default connect(mapStateToProps)(BasketComponent);
