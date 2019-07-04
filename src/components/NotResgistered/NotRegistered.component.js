import React from 'react';

// styles
import NotRegistered from './NotRegistered.styled';

type Props = {
  showRegistrationMessage?: Boolean,
  closeMessage?: Function
};

const NotRegisteredComponent = (props: Props) => {
  const { showRegistrationMessage, closeMessage } = props;

  return (
    <NotRegistered.Wrapper showRegistrationMessage={showRegistrationMessage}>
      <NotRegistered.Message>First you must sign in or sign up</NotRegistered.Message>
      <NotRegistered.CloseModal onClick={closeMessage}>Ok</NotRegistered.CloseModal>
    </NotRegistered.Wrapper>
  );
};

NotRegisteredComponent.defaultProps = {
  showRegistrationMessage: false,
  closeMessage: () => {}
};

export default NotRegisteredComponent;
