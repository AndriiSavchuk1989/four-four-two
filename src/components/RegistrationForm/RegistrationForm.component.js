import React from 'react';
import { connect } from 'react-redux';

// style
import RegistrationForm from './RegistrationForm.styled';

// actions
import { setUser } from '../../actions/user';

type Props = {
  setUser?: Function,
  isLoggedIn?: Boolean
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
    this.pushRoute('/products');
  };

  pushRoute = pathName => {
    // eslint-disable-next-line react/prop-types
    this.props.history.push(pathName);
  };

  render() {
    const { state } = this;

    return (
      <RegistrationForm.Wrapper>
        {
          !this.props.isLoggedIn ? (
            <>
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
            </>
          ) :
            (
              <RegistrationForm.Registered>You already logged in</RegistrationForm.Registered>
            )
        }
      </RegistrationForm.Wrapper>
    );
  }
}

RegistrationFormComponent.defaultProps = {
  setUser: () => {},
  isLoggedIn: false
};

const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFormComponent);
