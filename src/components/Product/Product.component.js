import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// styled
import Product from './Product.styled';
import QuantityHandlerComponent from '../QuantityHandler/QuantityHandler.component';

// actions
import { addProductToBasket } from '../../actions/product_cart_actions';

type Props = {
  type?: String,
  product?: Object,
  id?: Number,
  addProductToBasket?: Function
};

const ButtonsGroup = (props: Props) => {
  const { type, product } = props;

  switch (type) {
    case 'info': {
      return (
        <Product.AddToBasketButton
          onClick={props.addProductToBasket}
        >
          <Product.ButtonBackground action="basket" />
        </Product.AddToBasketButton>
      );
    }

    case 'basket': {
      return <QuantityHandlerComponent />;
    }

    default: {
      return (
        <>
          <Link to={`products/${product.id}`}>
            <Product.InfoButton>
              <Product.ButtonBackground action="info" />
            </Product.InfoButton>
          </Link>
          <Product.AddToBasketButton onClick={props.addProductToBasket}>
            <Product.ButtonBackground action="basket" />
          </Product.AddToBasketButton>
        </>
      );
    }
  }
};

ButtonsGroup.defaultProps = {
  type: '',
  product: {}
};

class ProductComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { productId: null };
    this.addProductToBasket = this.addProductToBasket.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => { return { productId: props.product.id }; });
  }

  addProductToBasket() {
    const { productId } = this.state;
    const id = productId || this.props.id;

    this.props.addProductToBasket(id);
  }

  render() {
    const { product, product: { price }, type } = this.props;
    const productPrice = `$${price}`;

    return (
      <Product.Wrapper>
        <Product.Discount />
        <Product.Icon type={product.type} />
        <Product.Image src={product.image} />
        <Product.Details>
          <Product.Name>{product.name}</Product.Name>
          <Product.Price>
            {productPrice}
          </Product.Price>
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
  addProductToBasket: null
};

const mapDispatchToProps = dispatch => ({
  addProductToBasket: id => {
    dispatch(addProductToBasket(id));
  }
});

export default connect(null, mapDispatchToProps)(ProductComponent);
