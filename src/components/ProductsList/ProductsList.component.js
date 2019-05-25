import * as React from 'react';
import connect from 'react-redux/es/connect/connect';

// styles
import ProductsList from './ProductsList.styled';

// components
import ProductComponent from '../Product/Product.component';

// actions
import { fetchAllProducts } from '../../actions/products_list_actions';

// data
import { products } from '../../../data/products';


class ProductsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { props } = this;
    props.fetchAllProducts();
    console.log('componentDidMount', products.length);
    console.log('this state', this.state);
  }

  render() {
    //const { products } = this.props;
    return (
      <ProductsList.Wrapper>
        {products.map((prod, item) => (
          <ProductComponent key={item.toString()} product={prod} />
        ))}
      </ProductsList.Wrapper>
    );
  }
};

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => {
    dispatch(fetchAllProducts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListComponent);
