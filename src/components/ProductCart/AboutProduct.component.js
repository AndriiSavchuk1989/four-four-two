import * as React from 'react';
import { connect } from 'react-redux';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';
import { getProductById } from '../../actions/product';

// components
import ProductComponent from '../Product/Product.component';

// styles
import About from './AboutProduct.styled';

type Props = {
  match?: any,
  product?: Object
};

class AboutProduct extends React.Component<Props> {
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
      <About.Wrapper>
        <ProductComponent
          product={product}
          type="info"
          id={productId}
        />
      </About.Wrapper>
    );
  }
}

AboutProduct.defaultProps = {
  match: null,
  product: {}
};

const mapStateToProps = state => ({
  product: state.product.product,
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
)(AboutProduct);
