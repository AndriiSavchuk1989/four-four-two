import * as React from 'react';
import { connect } from 'react-redux';

// actions
import { setUser } from '../../actions/product_cart_actions';

// components
import ProductComponent from '../Product/Product.component';
import PinnedBlockComponent from '../PinnedBlock/PinnedBlock.component';
import SuccessOrderComponent from '../SuccessOrder/SuccessOrder.component';

// styles
import ProductsList from '../ProductsList/ProductsList.styled';
import BasketWrapper from './Basket.styled';

type Props = {
  basket?: Array<Object>,
  count?: Number,
  totalPrice?: Number,
  isVisible?: Boolean,
  setUser?: Function,
  name?: String,
  surname?: String,
  email?: String
};

const Basket = (props: Props) => {
  const { basket, isVisible } = props;

  return (
    <BasketWrapper.Wrapper isVisible={isVisible}>
      <ProductsList.Wrapper type="basket">
        {basket.map(product => (
          <ProductComponent product={product} type="basket" />
        ))}
      </ProductsList.Wrapper>
    </BasketWrapper.Wrapper>
  );
};

const EmptyBasketComponent = () => {
  return (
    <BasketWrapper.EmptyBasket>
      Sorry, Your basket is empty. Please make your order
    </BasketWrapper.EmptyBasket>
  );
};

class BasketComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false, name: '', surname: '', email: ''
    };
  }

  onSubmitHandler = () => {
    const user = { name: 'Andrew', surname: 'Savchuk', email: 'andrey.m.savchuk@gmail.com' };

    this.props.setUser(user);

    this.setState(state => { return { isVisible: !state.isVisible }; });
  };

  onCloseModalHandler = () => {
    this.setState(state => { return { isVisible: !state.isVisible }; });
  };

  onChangeHandlerName = event => {
    this.setState(() => { return { name: event.target.value }; });
  };

  onChangeHandlerSurname = event => {
    this.setState(() => { return { surname: event.target.value }; });
  };

  onChangeHandlerEmail = event => {
    this.setState(() => { return { email: event.target.value }; });
  };

  render() {
    const { count, basket, totalPrice } = this.props;
    const { isVisible } = this.state;

    return (
      !count ?
        <EmptyBasketComponent />
        : (
          <>
            <Basket basket={basket} count={count} totalPrice={totalPrice} isVisible={isVisible} />
            <PinnedBlockComponent
              count={count}
              totalPrice={totalPrice}
              submitOrder={this.onSubmitHandler}
            />
            <SuccessOrderComponent
              isVisible={isVisible}
              closeModal={this.onCloseModalHandler}
              count={count}
              totalPrice={totalPrice}
              customerName={this.props.name}
              customerSurname={this.props.surname}
              customerEmail={this.props.email}
            />
          </>
        )
    );
  }
}

Basket.defaultProps = {
  basket: [],
  count: 0,
  totalPrice: 0,
  isVisible: true,
  setUser: null,
  name: '',
  surname: '',
  email: ''
};

BasketComponent.defaultProps = {
  basket: [],
  count: 0,
  totalPrice: 0,
  isVisible: false,
  setUser: null,
  name: '',
  surname: '',
  email: ''
};

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  }
});

const mapStateToProps = state => ({
  count: state.basket.count,
  basket: state.basket.basket,
  totalPrice: state.basket.totalPrice,
  name: state.user.user.name,
  surname: state.user.user.surname,
  email: state.user.user.email
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);
