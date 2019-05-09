import * as React from 'react';

import ProductsList from 'ProductsList.styled';
import ProductComponent from '../Product/Product.component';

class ProductsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    return (
      <ProductsList.Wrapper>
        {products.map((prod, item) => (
          <ProductComponent key={item.toString()} product={prod} />
        ))}
      </ProductsList.Wrapper>
    );
  }
};

export default ProductsListComponent;
