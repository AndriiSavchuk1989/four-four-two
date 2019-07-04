import React from 'react';

// styles
import LoggedIn from './LoggedIn.styled';

type Props = {
  name?: String
};

const LoggedInComponent = (props: Props) => {
  const {
    name
  } = props;
  const message = `Welcome, ${name}`;

  return (
    <>
      <LoggedIn.Field>{message}</LoggedIn.Field>
    </>
  );
};

LoggedInComponent.defaultProps = {
  name: ''
};

export default LoggedInComponent;
