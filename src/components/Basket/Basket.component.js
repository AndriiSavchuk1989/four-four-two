import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';
import ProductsList from '../ProductsList/ProductsList.styled';

const BasketComponent = (props) => {
  const { count, basket } = props;
  const renderedItems = basket => {
      return (
        basket.map(item => (
          <ProductsList.Wrapper>
            <ProductComponent key={item.id} product={item} />
          </ProductsList.Wrapper>
        ))
      )
  };
  return (
    !count ? <div>Empty</div> : renderedItems(basket)
  )
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket
});

export default connect(mapStateToProps)(BasketComponent);
