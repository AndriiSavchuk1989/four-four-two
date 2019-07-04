import React from 'react';

// styles
import PinnedBlock from '../PinnedBlock/PinnedBlock.styled';

type Props = {
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
};

export const LateRegistrationComponent = (props: Props) => {
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

LateRegistrationComponent.defaultProps = {
  submitOrder: null,
  setUserName: null,
  setUserSurname: null,
  setUserEmail: null,
  name: '',
  surname: '',
  email: '',
  onChangeName: null,
  onChangeSurname: null,
  onChangeEmail: null
};
