import * as React from 'react';
import { connect } from 'react-redux';

// styles
import ProductsList from './ProductsList.styled';

// components
import ProductComponent from '../Product/Product.component';

// actions
import { fetchAllProducts } from '../../actions/products_list_actions';
import { addProductToBasket } from '../../actions/product_cart_actions';
// import getSearchedProducts from '../../selectors/getSearchedProducts';

type Props = {
  products?: any
};

class ProductsListComponent extends React.Component<Props> {
  componentDidMount() {
    const { props } = this;

    props.fetchAllProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <ProductsList.Wrapper>
        {products.map((prod, item) => (
          <ProductComponent type="list" key={item.id} product={prod} />
        ))}
      </ProductsList.Wrapper>
    );
  }
}

ProductsListComponent.defaultProps = {
  products: null
};

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts());
  },
  addProductToBasket: id => {
    dispatch(addProductToBasket(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListComponent);
