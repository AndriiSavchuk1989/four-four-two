import React from "react";
import { connect } from 'react-redux';

import QuantityHandler from './QuantityHandler.styled';

class QuantityHandlerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basket: [] };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }

  componentDidMount(props) {
    this.setState({basket: this.props.basket})
  }

  decrease() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  increase() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  render() {
    const { basket } = this.props;
    console.log('basket!!!==', basket);
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

const mapStateToProps = state => ({
  basket: state.basket.basket
});

export default connect(mapStateToProps)(QuantityHandlerComponent);
