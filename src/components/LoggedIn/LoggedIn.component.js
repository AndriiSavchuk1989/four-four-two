import React from 'react';

// styles
import LoggedIn from './LoggedIn.styled';

type Props = {
  name?: String,
  surname?: String,
  email?: String
};

const LoggedInComponent = (props: Props) => {
  const {
    name,
    surname,
    email
  } = props;

  return (
    <>
      <LoggedIn.Field>{name}</LoggedIn.Field>
      <LoggedIn.Field>{surname}</LoggedIn.Field>
      <LoggedIn.Field>{email}</LoggedIn.Field>
    </>
  );
};

LoggedInComponent.defaultProps = {
  name: '',
  surname: '',
  email: ''
};

export default LoggedInComponent;
