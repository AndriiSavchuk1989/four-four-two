import React from "react";
import { Link } from 'react-router-dom';

// styled
import Product from './Product.styled';
import QuantityHandler from '../../components/QuantityHandler/QuantityHandler.component';

const RenderHandlers = props => {
  const { type, product } = props;
  switch(type) {
    case "info": {
      return <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>;
    }
    case 'basket': {
      return <QuantityHandler />
    }
    default: {
      return (
        <>
          <Product.InfoButton>
            <Link to={`products/${product.id}`} key={product.id}>More info</Link>
          </Product.InfoButton>
          <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>
        </>
      )
    }
  }
};

const ProductComponent = props => {
  const { product, type } = props;
  console.log('type__', type);
  //console.log(product.type);
  return (
    <Product.Wrapper>
      <Product.Image src={product.image} />
      <Product.Details>
        <Product.Name>{product.name}</Product.Name>
        <Product.Price>${product.price}</Product.Price>
      </Product.Details>
      <Product.ButtonsWrapper>
        <RenderHandlers type={type} product={product} />
      </Product.ButtonsWrapper>
    </Product.Wrapper>
  );
};

export default ProductComponent;
