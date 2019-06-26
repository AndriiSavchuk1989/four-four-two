import React from 'react';
import { connect } from 'react-redux';

import QuantityHandler from './QuantityHandler.styled';

type Props = {
  basket?: any
};

class QuantityHandlerComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => { return { basket: [...state.basket, ...props.basket] }; });
  }

  decrease() {
    this.setState(state => { return { quantity: state.quantity - 1 }; });
  }

  increase() {
    this.setState(state => { return { quantity: state.quantity + 1 }; });
  }

  render() {
    return (
      <QuantityHandler.Wrapper>
        <QuantityHandler.DecreaseButton onClick={this.decrease}>
          -
        </QuantityHandler.DecreaseButton>
        <QuantityHandler.QuantityView>
          {this.state.quantity}
        </QuantityHandler.QuantityView>
        <QuantityHandler.IncreaseButton onClick={this.increase}>
          +
        </QuantityHandler.IncreaseButton>
      </QuantityHandler.Wrapper>
    );
  }
}

QuantityHandlerComponent.defaultProps = {
  basket: []
};

const mapStateToProps = state => ({
  basket: state.basket.basket
});

export default connect(mapStateToProps)(QuantityHandlerComponent);
