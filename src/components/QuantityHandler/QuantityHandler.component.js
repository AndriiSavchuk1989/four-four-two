import React from 'react';
import { connect } from 'react-redux';

// actions
import {
  decreaseProductQuantity,
  increaseProductQuantity
} from '../../actions/product_cart_actions';

// styles
import QuantityHandler from './QuantityHandler.styled';

type Props = {
  quantity?: Number,
  currentProductId?: Number,
  increase?: Function,
  decrease?: Function
};

class QuantityHandlerComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { id: 0, quantity: 0 };
  }

  componentDidMount() {
    this.setState((state, props) => {
      return {
        id: props.currentProductId,
        quantity: props.quantity
      };
    });
  }

  decreaseQuantity = () => {
    const { id } = this.state;

    this.setState(state => { return { quantity: state.quantity - 1 }; });

    this.props.decrease(id);
  };

  increaseQuantity = () => {
    const { id } = this.state;

    this.setState(state => { return { quantity: state.quantity + 1 }; });

    this.props.increase(id);
  };

  render() {
    return (
      <QuantityHandler.Wrapper>
        <QuantityHandler.DecreaseButton onClick={this.decreaseQuantity}>
          -
        </QuantityHandler.DecreaseButton>
        <QuantityHandler.QuantityView>
          {this.state.quantity}
        </QuantityHandler.QuantityView>
        <QuantityHandler.IncreaseButton onClick={this.increaseQuantity}>
          +
        </QuantityHandler.IncreaseButton>
      </QuantityHandler.Wrapper>
    );
  }
}

QuantityHandlerComponent.defaultProps = {
  quantity: 0,
  currentProductId: null,
  increase: () => {},
  decrease: () => {}
};

const mapStateToProps = state => ({
  basket: state.basket.basket
});

const mapDispatchToProps = dispatch => ({
  increase: id => {
    dispatch(increaseProductQuantity(id));
  },
  decrease: id => {
    dispatch(decreaseProductQuantity(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuantityHandlerComponent);
