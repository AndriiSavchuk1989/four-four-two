import * as React from 'react';
import { connect } from 'react-redux';
import LoaderComponent from '../Loader/Loader.component';

// styles
import ProductsList from './ProductsList.styled';

// components
import ProductComponent from '../Product/Product.component';

// actions
import { fetchAllProducts } from '../../actions/products_list_actions';
import { addProductToBasket } from '../../actions/product_cart_actions';
// import getSearchedProducts from '../../selectors/getSearchedProducts';

type Props = {
  products?: any,
  isLoading?: boolean
};

class ProductsListComponent extends React.Component<Props> {
  componentDidMount() {
    const { props } = this;

    props.fetchAllProducts();
  }

  render() {
    const { products, isLoading } = this.props;

    return (
      <ProductsList.Wrapper>
        {
          isLoading ? (
            <LoaderComponent />
          ) : (
            products.map((prod, item) => (
              <ProductComponent type="list" key={item.id} product={prod} />
            ))
          )
        }
      </ProductsList.Wrapper>
    );
  }
}

ProductsListComponent.defaultProps = {
  products: null,
  isLoading: false
};

const mapStateToProps = state => ({
  products: state.products.products,
  isLoading: state.products.isLoading
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
