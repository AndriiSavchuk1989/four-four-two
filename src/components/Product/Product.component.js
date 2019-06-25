import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styled
import Product from './Product.styled';
import QuantityHandlerComponent from '../../components/QuantityHandler/QuantityHandler.component';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';

const RenderHandlers = props => {
  const { type, product, addProductToBasket } = props;
  switch(type) {
    case "info": {
      return <Product.AddToBasketButton onClick={addProductToBasket}>Add to basket</Product.AddToBasketButton>;
    }
    case 'basket': {
      return <QuantityHandlerComponent />
    }
    default: {
      return (
        <>
          <Product.InfoButton>
            <Link to={`products/${product.id}`}>More info</Link>
          </Product.InfoButton>
          <Product.AddToBasketButton onClick={addProductToBasket}>Add to basket</Product.AddToBasketButton>
        </>
      )
    }
  }
};

class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {productId: null};
    this.addProductToBasket = this.addProductToBasket.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => {return {productId: props.product.id}});
  }

  addProductToBasket(){
    const id = this.state.productId || this.props.id;
    this.props.addProductToBasket(id);
  }

  render () {
    const { product, type } = this.props;
    console.log('product component id__', this.state);
    return(
      <Product.Wrapper>
        <Product.Image src={product.image} />
        <Product.Details>
          <Product.Name>{product.name}</Product.Name>
          <Product.Price>${product.price}</Product.Price>
        </Product.Details>
        <Product.ButtonsWrapper>
          <RenderHandlers type={type} product={product} addProductToBasket={this.addProductToBasket} />
        </Product.ButtonsWrapper>
      </Product.Wrapper>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  addProductToBasket: (id) => {
    dispatch(addProductToBasket(id))
  }
});

export default connect(null ,mapDispatchToProps)(ProductComponent);
