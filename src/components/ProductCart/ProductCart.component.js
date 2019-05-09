import * as React from 'react';

// components
import Product from '../Product/Product.styled';

class ProductCartComponent extends React.Component {
  render() {
    return (
      <Product.Wrapper>
        <Product.Image src='' />
        <Product.Details>
          <Product.Name>Name</Product.Name>
          <Product.Price>Price</Product.Price>
        </Product.Details>
        <Product.AddToBasketButton />
      </Product.Wrapper>
    )
  }
}

export default ProductCartComponent;
