import * as React from 'react';
import { connect } from 'react-redux';
// actions
import { addProductToBasket } from '../../actions/product_cart_actions';
import { getProductById } from '../../actions/products_list_actions';
import ProductComponent from '../Product/Product.component';

class ProductCartComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productId: null};
  }


  componentDidMount() {
    const { props } = this;
    props.getProductById(props.match.params.id);
    this.setState((state, props) => {return {productId: props.match.params.id}});
    console.log('cart did mount props', props);
  }

  render() {
    const { product } = this.props;
    console.log('product__from product cart___', product);
    console.log('product id from state___', this.state.productId);
    return (
      <ProductComponent
        product={product}
        type="info"
        id={this.state.productId}
      />
      )
  }
};

const mapStateToProps = state => ({
  product: state.products.product,
  basket: state.basket.basket
});

const mapDispatchToProps = dispatch => ({
  addProductToBasket: id => {
      dispatch(addProductToBasket(id));
  },
  getProductById: id => {
    dispatch(getProductById(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCartComponent);
