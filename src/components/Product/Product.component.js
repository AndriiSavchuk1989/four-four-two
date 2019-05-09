import React from "react";
import Product from 'Product.styled';

const ProductComponent = props => {
  const { product } = props;
  return (
    <Product.Wrapper>
      <Product.Image src={product.image} />
      <Product.Details>
        <Product.Name>{product.name}</Product.Name>
        <Product.Price>{product.price}</Product.Price>
      </Product.Details>
      <Product.ButtonsWrapper>
        <Product.InfoButton onClick={alert} />
        <Product.AddToBasketButton />
      </Product.ButtonsWrapper>
    </Product.Wrapper>
  );
};

export default ProductComponent;
