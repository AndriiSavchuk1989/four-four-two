import React from 'react';
import { connect } from 'react-redux';
import ProductComponent from '../Product/Product.component';

const BasketComponent = (props) => {
  const { count, basket } = props;
  return (
    !count ? <div>Empty</div> : <div>You have {count} products in a basket</div>
  )
};

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket
});

export default connect(mapStateToProps)(BasketComponent);
