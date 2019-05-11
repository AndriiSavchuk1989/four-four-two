import * as React from 'react';

// components
import Product from '../Product/Product.styled';

// data
import { products } from '../../../data/products';

class ProductCartComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    const product = products.find(x => x.id === this.props.match.params.id);
    return (
      <Product.Wrapper>
        <Product.Image src={product.image} />
        <Product.Details>
          <Product.Name>{product.name}</Product.Name>
          <Product.Price>{product.price}</Product.Price>
        </Product.Details>
        <Product.AddToBasketButton />
      </Product.Wrapper>
    )
  }
}

export default ProductCartComponent;
