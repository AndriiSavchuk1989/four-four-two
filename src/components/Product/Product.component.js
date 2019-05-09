import React from "react";
import Product from './Product.styled';

const ProductComponent = props => {
  const { product } = props;
  console.log(product.type);
  return (
    <Product.Wrapper>
      <Product.Image src={product.image} />
      <Product.Details>
        <Product.Name>{product.name}</Product.Name>
        <Product.Price>{product.price}</Product.Price>
      </Product.Details>
      <Product.ButtonsWrapper>
        {(() => {
          switch(product.type) {
            case 'kit':
              return <Product.InfoButton kit />;
            case 'boot':
              return <Product.InfoButton boot />;
            default:
              return <Product.InfoButton />;
          }
        })()}
        <Product.AddToBasketButton />
      </Product.ButtonsWrapper>
    </Product.Wrapper>
  );
};

export default ProductComponent;
