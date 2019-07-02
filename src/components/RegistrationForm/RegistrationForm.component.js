import React from 'react';
import RegistrationForm from './RegistrationForm.styled';

class RegistrationFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', surname: '', email: '' };
  }

  onNameChange = event => {
    // eslint-disable-next-line no-console
    console.log('name__', event.target.value);
    this.setState({ name: event.target.value });
  };

  onSurnameChange = event => {
    // eslint-disable-next-line no-console
    console.log('surname__', event.target.value);
    this.setState({ surname: event.target.value });
  };

  onEmailChange = event => {
    // eslint-disable-next-line no-console
    console.log('email__', event.target.value);
    this.setState({ email: event.target.value });
  };

  onSubmitHandler = () => {
    // eslint-disable-next-line no-console
    console.log(this.state);
  };

  render() {
    return (
      <RegistrationForm.Wrapper>
        <RegistrationForm.RegistrationHeader>
          Registration form
        </RegistrationForm.RegistrationHeader>
        <RegistrationForm.InputsGroup>
          <RegistrationForm.Input
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Name"
            onChange={this.onNameChange}
          />
          <RegistrationForm.Input
            name="surname"
            value={this.state.surname}
            type="text"
            placeholder="Surname"
            onChange={this.onSurnameChange}
          />
          <RegistrationForm.Input
            name="email"
            value={this.state.email}
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

export default RegistrationFormComponent;
