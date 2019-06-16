import * as React from 'react';
import connect from 'react-redux/es/connect/connect';

// components
import Product from '../Product/Product.styled';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';
import { getProductById } from '../../actions/products_list_actions';

class ProductCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addProductToBasket = this.addProductToBasket.bind(this);
  }

  componentDidMount() {
    const { props } = this;
    props.getProductById(props.match.params.id);
    console.log('component did mount', props);
  }

  addProductToBasket() {
    this.props.addProductToBasket(this.props.match.params.id);
    console.log(this.props.match.params.id);
    console.log('state', this.state);
  }
  render() {
    const { product } = this.props;
    console.log(product);
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
  product: state.products.product
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
