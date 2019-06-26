import * as React from 'react';
import { connect } from 'react-redux';
// actions
import { addProductToBasket } from '../../actions/product_cart_actions';
import { getProductById } from '../../actions/products_list_actions';
import ProductComponent from '../Product/Product.component';

type Props = {
  match?: any,
  product?: any
};

class ProductCartComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { productId: null };
  }


  componentDidMount() {
    const { props, props: { match: { params: { id } } } } = this;

    props.getProductById(id);
    this.setState(() => { return { productId: id }; });
  }

  render() {
    const { product } = this.props;
    const { productId } = this.state;

    return (
      <ProductComponent
        product={product}
        type="info"
        id={productId}
      />
    );
  }
}

ProductCartComponent.defaultProps = {
  match: null,
  product: null
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
  mapDispatchToProps
)(ProductCartComponent);
