import React from 'react';

// styles
import PinnedBlock from './PinnedBlock.styled';

type Props = {
  count?: Number,
  totalPrice?: Number,
  submitOrder?: Function,
  setUserName?: Function,
  setUserSurname?: Function,
  setUserEmail?: Function
};

class PinnedBlockComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '' };
  }

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onChangeSurname = event => {
    this.setState({ surname: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { count, totalPrice } = this.props;

    return (
      <PinnedBlock.Wrapper>
        <PinnedBlock.FieldWrapper>
          <PinnedBlock.TotalPrice>
            Price:
            {totalPrice}
          </PinnedBlock.TotalPrice>
          <PinnedBlock.TotalCount>
            Count:
            {count}
          </PinnedBlock.TotalCount>
          <PinnedBlock.SubmitButton onClick={() => this.props.submitOrder(this.state)}>
            Submit order
          </PinnedBlock.SubmitButton>
        </PinnedBlock.FieldWrapper>
        <PinnedBlock.UserInfoWrapper>
          <PinnedBlock.NameInput
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <PinnedBlock.SurnameInput
            type="text"
            placeholder="Surname"
            value={this.state.surname}
            onChange={this.onChangeSurname}
          />
          <PinnedBlock.EmailInput
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </PinnedBlock.UserInfoWrapper>
      </PinnedBlock.Wrapper>
    );
  }
}

PinnedBlockComponent.defaultProps = {
  count: 0,
  totalPrice: 0,
  submitOrder: null,
  setUserName: null,
  setUserSurname: null,
  setUserEmail: null
};

export default PinnedBlockComponent;
