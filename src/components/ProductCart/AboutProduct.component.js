import * as React from 'react';
import { connect } from 'react-redux';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';
import { getProductById } from '../../actions/product';

// styles
import About from './AboutProduct.styled';
import LoaderComponent from '../Loader/Loader.component';

// components
import ProductComponent from '../Product/Product.component';

type Props = {
  match?: any,
  product?: Object,
  isLoading?: Boolean
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
    const { product, isLoading } = this.props;
    const { productId } = this.state;

    return (
      <About.Wrapper>
        {
          isLoading ? (
            <LoaderComponent />
          ) : (
            <ProductComponent
              product={product}
              type="info"
              id={productId}
            />
          )
        }
      </About.Wrapper>
    );
  }
}

AboutProduct.defaultProps = {
  match: null,
  product: {},
  isLoading: false
};

const mapStateToProps = ({ product, basket }) => ({
  product: product.data,
  isLoading: product.isLoading,
  basket: basket.data
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
