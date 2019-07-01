import * as React from 'react';
import Product from './Product.styled';

type PropsD = {
  product?: Object
};

const ProductBasicDetails = (props: PropsD) => {
  const { product } = props;
  const productPrice = `$${product.price}`;

  return (
    <>
      <Product.Name>{product.name}</Product.Name>
      <Product.Price>{productPrice}</Product.Price>
    </>
  );
};

ProductBasicDetails.defaultProps = {
  product: {}
};

const ProductDescriptionComponent = (props: PropsD) => {
  const { product } = props;
  const productPrice = `$${product.price}`;

  return (
    <>
      <Product.Name>
        Name:
        {product.name}
      </Product.Name>
      <Product.Price>
        Price:
        {productPrice}
      </Product.Price>
      <Product.Country>
        Country:
        {product.country}
      </Product.Country>
      <Product.Description>
        Description:
        {product.description}
      </Product.Description>
      <Product.Count>
        Quantity:
        {product.quantity}
      </Product.Count>
    </>
  );
};

ProductDescriptionComponent.defaultProps = {
  product: {}
};

type PropsI = {
  product?: Object,
  type?: String
};

export const InfoComponent = (props: PropsI) => {
  const { type, product } = props;
  let description;

  if (type === 'info') {
    description = <ProductDescriptionComponent product={product} />;
  } else {
    description = <ProductBasicDetails product={product} />;
  }

  return (
    <>
      { description }
    </>
  );
};

InfoComponent.defaultProps = {
  product: {},
  type: ''
};

export default InfoComponent;
