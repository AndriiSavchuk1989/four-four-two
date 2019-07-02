import React from 'react';
import Product from '../Product/Product.styled';

type Props = {
  product?: Object
};

const ProductDescriptionComponent = (props: Props) => {
  const { product } = props;

  return (
    <Product.Details>
      <Product.Name>{product.name}</Product.Name>
      <Product.Price>{product.price}</Product.Price>
      <Product.Country>{product.country}</Product.Country>
      <Product.Description>{product.description}</Product.Description>
      <Product.Count>{product.quantity}</Product.Count>
    </Product.Details>
  );
};

ProductDescriptionComponent.defaultProps = {
  product: {}
};

export default ProductDescriptionComponent;
