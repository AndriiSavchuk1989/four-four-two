import React from 'react';
import ProductComponent from '../Product/Product.component';

// temporary data
import { products } from '../../../data/basket';


const BasketComponent = products => {
  return (
    products.map((item, index) => {
      <ProductComponent key={index.toString()} product={item} />
    })
  )
};

export default BasketComponent;
