import * as React from 'react';

// styles
import Product from './Product.styled';

type PropsD = {
  product?: Object
};

const ProductBasicDetails = (props: PropsD) => {
  const { product: { price, name } } = props;
  const productPrice = `$${price}`;

  return (
    <>
      <Product.Name>{name}</Product.Name>
      <Product.Price>{productPrice}</Product.Price>
    </>
  );
};

ProductBasicDetails.defaultProps = {
  product: {}
};

const ProductDescriptionComponent = (props: PropsD) => {
  const {
    product: {
      price,
      name,
      country,
      description,
      quantity
    }
  } = props;
  const productPrice = `$${price}`;

  return (
    <>
      <Product.Name>
        Name:
        {name}
      </Product.Name>
      <Product.Price>
        Price:
        {productPrice}
      </Product.Price>
      <Product.Country>
        Country:
        {country}
      </Product.Country>
      <Product.Description>
        Description:
        {description}
      </Product.Description>
      <Product.Count>
        Quantity:
        {quantity}
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
