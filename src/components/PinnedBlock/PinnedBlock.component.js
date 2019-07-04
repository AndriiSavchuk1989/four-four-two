import React from 'react';

// styles
import PinnedBlock from './PinnedBlock.styled';

// components
import LoggedInComponent from '../LoggedIn/LoggedIn.component';
import { LateRegistrationComponent } from '../RegistrationForm/LateRegistration';

type Props = {
  count?: Number,
  totalPrice?: Number,
  name?: String,
  surname?: String,
  email?: String,
  submitOrder?: Function,
  isLoggedIn?: Boolean
};

class PinnedBlockComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '' };
  }

  componentDidMount() {
    this.setState((state, props) => {
      return { name: props.name, surname: props.surname, email: props.email };
    });
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
    const {
      count,
      totalPrice,
      isLoggedIn,
      name,
      surname,
      email
    } = this.props;

    const { state } = this;

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
          <PinnedBlock.SubmitButton
            onClick={() => this.props.submitOrder(this.state)}
          >
            Submit order
          </PinnedBlock.SubmitButton>
        </PinnedBlock.FieldWrapper>
        <PinnedBlock.UserInfoWrapper>
          {isLoggedIn ? (
            <LoggedInComponent
              name={name}
              surname={surname}
              email={email}
            />
          ) : (
            <LateRegistrationComponent
              name={state.name}
              surname={state.surname}
              email={state.email}
              onChangeName={this.onChangeName}
              onChangeSurname={this.onChangeSurname}
              onChangeEmail={this.onChangeEmail}
            />
          )
          }
        </PinnedBlock.UserInfoWrapper>
      </PinnedBlock.Wrapper>
    );
  }
}

PinnedBlockComponent.defaultProps = {
  count: 0,
  totalPrice: 0,
  submitOrder: null,
  isLoggedIn: false,
  name: '',
  surname: '',
  email: ''
};

export default PinnedBlockComponent;
