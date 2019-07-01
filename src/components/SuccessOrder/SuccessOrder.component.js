import React from 'react';

// styles
import SuccessOrder from './SuccessOrder.styled';

type Props = {
  isVisible?: Boolean,
  count?: Number,
  totalPrice?: Number,
  customerName?: String,
  customerSurname?: String,
  customerEmail?: String
};

const SuccessOrderComponent = (props: Props) => {
  const {
    isVisible,
    count,
    totalPrice,
    customerName,
    customerSurname,
    customerEmail
  } = props;

  return (
    <SuccessOrder.Wrapper isVisible={isVisible}>
      <SuccessOrder.Name>{customerName}</SuccessOrder.Name>
      <SuccessOrder.Surname>{customerSurname}</SuccessOrder.Surname>
      <SuccessOrder.Email>{customerEmail}</SuccessOrder.Email>
      <SuccessOrder.Count>{count}</SuccessOrder.Count>
      <SuccessOrder.Price>{totalPrice}</SuccessOrder.Price>
    </SuccessOrder.Wrapper>
  );
};

SuccessOrderComponent.defaultProps = {
  isVisible: false,
  count: 0,
  totalPrice: 0,
  customerName: '',
  customerSurname: '',
  customerEmail: ''
};

export default SuccessOrderComponent;
