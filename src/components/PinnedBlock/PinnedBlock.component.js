import React from 'react';

// styles
import PinnedBlock from './PinnedBlock.styled';

type Props = {
  count?: Number,
  totalPrice?: Number
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
        <PinnedBlock.SubmitButton>Submit order</PinnedBlock.SubmitButton>
      </PinnedBlock.FieldWrapper>
      <PinnedBlock.UserInfoWrapper>
        <PinnedBlock.NameInput type="text" placeholder="Name" />
        <PinnedBlock.SurnameInput type="text" placeholder="Surname" />
        <PinnedBlock.EmailInput type="email" placeholder="E-mail" />
      </PinnedBlock.UserInfoWrapper>
    </PinnedBlock.Wrapper>
  );
};

PinnedBlockComponent.defaultProps = {
  count: 0,
  totalPrice: 0
};

export default PinnedBlockComponent;
