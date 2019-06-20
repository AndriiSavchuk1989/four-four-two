import * as React from 'react';
import { connect } from 'react-redux';

// styles
import ProductsList from './ProductsList.styled';

// components
import ProductComponent from '../Product/Product.component';

// actions
import { fetchAllProducts } from '../../actions/products_list_actions';
import getSearchedProducts from '../../selectors/getSearchedProducts';

class ProductsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { props } = this;
    props.fetchAllProducts();
    console.log('componentDidMount', props);
  }

  render() {
    const { products } = this.props;
    return (
      <ProductsList.Wrapper>
        {products.map((prod, item) => (
          <ProductComponent key={item.id} product={prod} />
        ))}
      </ProductsList.Wrapper>
    );
  }
};

const mapStateToProps = state => {
  return state.products;
};

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListComponent);
