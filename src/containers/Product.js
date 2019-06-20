import React from "react";

const ProductContainer = Component => {
  class _ProductContainer extends React.Component {
    constructor(props) {
      const { product } = props;
      super(props);
      this.state = { product: { ...product } };
      this.state.handleClick = this.handleClick.bind(this);
      this.state.handleAddToBasket = this.handleAddToBasket.bind(this);
    }

    handleClick() {
      console.log(`product id:${this.state.product.id}`);
    };

    handleAddToBasket() {
      console.log(
        `Thanks, you have add ${this.state.product.name} ${
          this.state.product.type
          } to basket`
      );
    };

    render() {
      console.log(this.state);
      return <Component {...this.state} {...this.props} />;
    }
  }
  _ProductContainer.displayName = "Product Container";
  return _ProductContainer;
};

export default ProductContainer;
