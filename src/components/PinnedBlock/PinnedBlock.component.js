import React from 'react';

// styles
import PinnedBlock from './PinnedBlock.styled';

// components
import LoggedInComponent from '../LoggedIn/LoggedIn.component';

type Props = {
  count?: Number,
  totalPrice?: Number,
  name?: String,
  surname?: String,
  email?: String,
  submitOrder?: Function,
  setUserName?: Function,
  setUserSurname?: Function,
  setUserEmail?: Function,
  onChangeName?: Function,
  onChangeSurname?: Function,
  onChangeEmail?: Function,
  isLoggedIn?: Boolean
};

const LateRegistrationComponent = (props: Props) => {
  const {
    name,
    surname,
    email,
    onChangeName,
    onChangeSurname,
    onChangeEmail
  } = props;

  return (
    <>
      <PinnedBlock.NameInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={onChangeName}
      />
      <PinnedBlock.SurnameInput
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={onChangeSurname}
      />
      <PinnedBlock.EmailInput
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={onChangeEmail}
      />
    </>
  );
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
              name={this.state.name}
              surname={this.state.surname}
              email={this.state.email}
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
  setUserName: null,
  setUserSurname: null,
  setUserEmail: null,
  isLoggedIn: false,
  name: '',
  surname: '',
  email: '',
  onChangeName: () => {},
  onChangeSurname: () => {},
  onChangeEmail: () => {}
};

LateRegistrationComponent.defaultProps = {
  count: 0,
  totalPrice: 0,
  submitOrder: null,
  setUserName: null,
  setUserSurname: null,
  setUserEmail: null,
  isLoggedIn: false,
  name: '',
  surname: '',
  email: '',
  onChangeName: () => {},
  onChangeSurname: () => {},
  onChangeEmail: () => {}
};

export default PinnedBlockComponent;
