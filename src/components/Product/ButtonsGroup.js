import * as React from 'react';
import { Link } from 'react-router-dom';

// styles
import Product from './Product.styled';

// components
import QuantityHandlerComponent from '../QuantityHandler/QuantityHandler.component';

type Props = {
  type?: String,
  product?: Object,
  id?: Number,
  addProductToBasket?: Function
};

export const ButtonsGroup = (props: Props) => {
  const { type, product } = props;

  switch (type) {
    case 'info': {
      return (
        <Product.AddToBasketButton
          onClick={props.addProductToBasket}
        >
          <Product.ButtonBackground action="basket" />
        </Product.AddToBasketButton>
      );
    }

    case 'basket': {
      return <QuantityHandlerComponent currentProductId={product.id} quantity={product.quantity} />;
    }

    default: {
      return (
        <>
          <Link to={`products/${product.id}`}>
            <Product.InfoButton>
              <Product.ButtonBackground action="info" />
            </Product.InfoButton>
          </Link>
          <Product.AddToBasketButton onClick={props.addProductToBasket}>
            <Product.ButtonBackground action="basket" />
          </Product.AddToBasketButton>
        </>
      );
    }
  }
};

ButtonsGroup.defaultProps = {
  type: '',
  product: {}
};
