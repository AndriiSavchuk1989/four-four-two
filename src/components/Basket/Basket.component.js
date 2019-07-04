import * as React from 'react';
import { connect } from 'react-redux';

// actions
import { resetBasket } from '../../actions/product_cart_actions';
import { setUser } from '../../actions/user';

// components
import PinnedBlockComponent from '../PinnedBlock/PinnedBlock.component';
import SuccessOrderComponent from '../SuccessOrder/SuccessOrder.component';
import { Basket } from './BasketBasic';
import { EmptyBasketComponent } from './EmptyBasket';

type Props = {
  basket?: Array<Object>,
  count?: Number,
  totalPrice?: Number,
  isVisible?: Boolean,
  setUser?: Function,
  resetBasket?: Function,
  name?: String,
  surname?: String,
  email?: String,
  isLoggedIn?: Boolean
};

class BasketComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false, name: '', surname: '', email: ''
    };
  }

  componentDidMount() {
    const { name, surname, email } = this.props;

    this.setState(state => {
      return {
        ...state, name, surname, email
      };
    });
  }

  onSubmitHandler = ({ name, surname, email }) => {
    if (!name || !surname || !email) {
      alert('Please, fill your info');
    } else {
      const user = { name, surname, email };

      this.props.setUser(user);

      this.setState(state => { return { isVisible: !state.isVisible }; });
    }
  };

  onCloseModalHandler = () => {
    this.setState(state => { return { isVisible: !state.isVisible }; });
    this.props.resetBasket();
    window.history.back();
  };

  render() {
    const {
      count,
      basket,
      totalPrice,
      isLoggedIn,
      name,
      surname,
      email
    } = this.props;
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
              isLoggedIn={isLoggedIn}
              name={name}
              surname={surname}
              email={email}
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

BasketComponent.defaultProps = {
  basket: [],
  count: 0,
  totalPrice: 0,
  isVisible: false,
  setUser: () => {},
  name: '',
  surname: '',
  email: '',
  resetBasket: () => {},
  isLoggedIn: false
};

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  },
  resetBasket: () => {
    dispatch(resetBasket());
  }
});

const mapStateToProps = ({ basket, user }) => ({
  count: basket.count,
  basket: basket.data,
  totalPrice: basket.totalPrice,
  name: user.data.name,
  surname: user.data.surname,
  email: user.data.email,
  isLoggedIn: user.isLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketComponent);
