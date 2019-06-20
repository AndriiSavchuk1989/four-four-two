import React from "react";
import Product from './Product.styled';
import { Link } from 'react-router-dom';

const renderHandlers = ({type}) => {
  switch(type) {
    case "info": {
      return <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>;
    }
    case 'basket': {
      return
    }
  }
};

const ProductComponent = props => {
  const { product } = props;
  //console.log(product.type);
  return (
    <Product.Wrapper>
      <Product.Image src={product.image} />
      <Product.Details>
        <Product.Name>{product.name}</Product.Name>
        <Product.Price>${product.price}</Product.Price>
      </Product.Details>
      <Product.ButtonsWrapper>
        <Product.InfoButton>
          <Link to={`products/${product.id}`} key={product.id}>More info</Link>
        </Product.InfoButton>
        <Product.AddToBasketButton>Add to basket</Product.AddToBasketButton>
      </Product.ButtonsWrapper>
    </Product.Wrapper>
  );
};

export default ProductComponent;
