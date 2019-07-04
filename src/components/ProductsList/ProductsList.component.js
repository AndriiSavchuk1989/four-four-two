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

type Props = {
  products?: Array<Object>,
  isLoading?: Boolean
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
            products.map(product => (
              <ProductComponent type="list" key={product.id} product={product} id={product.id} />
            ))
          )
        }
      </ProductsList.Wrapper>
    );
  }
}

ProductsListComponent.defaultProps = {
  products: [],
  isLoading: false
};

const mapStateToProps = ({ products }) => ({
  products: products.data,
  isLoading: products.isLoading
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
