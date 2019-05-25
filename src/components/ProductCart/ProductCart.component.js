import * as React from 'react';
import connect from 'react-redux/es/connect/connect';

// components
import Product from '../Product/Product.styled';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';

class ProductCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addProductToBasket = this.addProductToBasket.bind(this);
  }

  addProductToBasket() {
    this.props.addProductToBasket(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    const product = products.find(x => x.id === this.props.match.params.id);
    console.log('this.props___',this.props);
    console.log('product info___',product);
    console.log('this.props.match___',this.props.match);
    console.log('this.props.match.params___',this.props.match.params);
    return (
      <Product.Wrapper>
        <Product.Image src={product.image} />
        <Product.Details>
          <Product.Name>{product.name}</Product.Name>
          <Product.Price>{product.price}</Product.Price>
        </Product.Details>
        <Product.AddToBasketButton onClick={this.addProductToBasket} />
      </Product.Wrapper>
    )
  }
};

const mapStateToProps = state => ({
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  addProductToBasket: id => {
      dispatch(addProductToBasket(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCartComponent);
