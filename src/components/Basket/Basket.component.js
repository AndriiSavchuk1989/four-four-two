import React from 'react';
import ProductComponent from '../Product/Product.component';

// temporary data
import { products as basket}  from '../../../data/basket';

const BasketComponent = () => {
  console.log(basket);
  return (
    basket.map((item, index) => {
      <ProductComponent key={index.toString()} product={item} />
    })

  )
};

export default BasketComponent;
