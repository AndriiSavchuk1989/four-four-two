import React from "react";
import QuantityHandler from './QuantityHandler.styled';

class QuantityHandlerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  decrease() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  increase() {
    this.setState({ quantity: this.state.quantity + 1 });
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

export default QuantityHandlerComponent;
