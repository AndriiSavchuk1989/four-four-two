import React from 'react';
import { connect } from 'react-redux';

// style
import RegistrationForm from './RegistrationForm.styled';

// actions
import { setUser } from '../../actions/user';

type Props = {
  setUser?: Function
};

class RegistrationFormComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '' };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSurnameChange = event => {
    this.setState({ surname: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onSubmitHandler = () => {
    // eslint-disable-next-line no-console
    this.props.setUser({ ...this.state });
    window.history.back();
  };

  render() {
    const { state } = this;

    return (
      <RegistrationForm.Wrapper>
        <RegistrationForm.RegistrationHeader>
          Registration form
        </RegistrationForm.RegistrationHeader>
        <RegistrationForm.InputsGroup>
          <RegistrationForm.Input
            name="name"
            value={state.name}
            type="text"
            placeholder="Name"
            onChange={this.onNameChange}
          />
          <RegistrationForm.Input
            name="surname"
            value={state.surname}
            type="text"
            placeholder="Surname"
            onChange={this.onSurnameChange}
          />
          <RegistrationForm.Input
            name="email"
            value={state.email}
            type="text"
            placeholder="Email"
            onChange={this.onEmailChange}
          />
        </RegistrationForm.InputsGroup>
        <RegistrationForm.SubmitButton onClick={this.onSubmitHandler}>
          Submit
        </RegistrationForm.SubmitButton>
      </RegistrationForm.Wrapper>
    );
  }
}

RegistrationFormComponent.defaultProps = {
  setUser: () => {}
};

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  }
});

export default connect(null, mapDispatchToProps)(RegistrationFormComponent);
