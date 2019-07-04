import * as React from 'react';
import { connect } from 'react-redux';

// styles
import Product from './Product.styled';

// components
import { InfoComponent } from './ProductDetails.component';
import { ButtonsGroup } from './ButtonsGroup';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';

type Props = {
  type?: String,
  product?: Object,
  id?: Number,
  addProductToBasket?: Function
};

class ProductComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { productId: null };
  }

  componentDidMount() {
    this.setState((state, props) => { return { productId: props.id }; });
  }

  addProductToBasket = () => {
    const { productId } = this.state;
    const id = productId || this.props.id;

    this.props.addProductToBasket(id);
  };

  render() {
    const { product, type } = this.props;

    return (
      <Product.Wrapper type={type}>
        <Product.Discount />
        <Product.Icon type={product.type} />
        <Product.Image src={product.image} />
        <Product.Details>
          <InfoComponent type={type} product={product} />
        </Product.Details>
        <Product.ButtonsWrapper>
          <ButtonsGroup
            type={type}
            product={product}
            addProductToBasket={this.addProductToBasket}
          />
        </Product.ButtonsWrapper>
      </Product.Wrapper>
    );
  }
}

ProductComponent.defaultProps = {
  type: '',
  product: {},
  id: null,
  addProductToBasket: () => {}
};

const mapDispatchToProps = dispatch => ({
  addProductToBasket: id => {
    dispatch(addProductToBasket(id));
  }
});

export default connect(null, mapDispatchToProps)(ProductComponent);
