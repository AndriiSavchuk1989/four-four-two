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

const PinnedBlockComponent = (props: Props) => {
  const { count, totalPrice } = props;

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
        <PinnedBlock.SubmitButton onClick={props.submitOrder}>
          Submit order
        </PinnedBlock.SubmitButton>
      </PinnedBlock.FieldWrapper>
      <PinnedBlock.UserInfoWrapper>
        <PinnedBlock.NameInput
          type="text"
          placeholder="Name"
        />
        <PinnedBlock.SurnameInput
          type="text"
          placeholder="Surname"
        />
        <PinnedBlock.EmailInput
          type="email"
          placeholder="E-mail"
        />
      </PinnedBlock.UserInfoWrapper>
    </PinnedBlock.Wrapper>
  );
};

PinnedBlockComponent.defaultProps = {
  count: 0,
  totalPrice: 0,
  submitOrder: null,
  setUserName: null,
  setUserSurname: null,
  setUserEmail: null
};

export default PinnedBlockComponent;
