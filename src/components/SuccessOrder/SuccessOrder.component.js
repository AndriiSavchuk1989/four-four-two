import React from 'react';

// styles
import SuccessOrder from './SuccessOrder.styled';

type Props = {
  isVisible?: Boolean,
  count?: Number,
  totalPrice?: Number,
  customerName?: String,
  customerSurname?: String,
  customerEmail?: String,
  closeModal?: Function
};

const SuccessOrderComponent = (props: Props) => {
  const {
    isVisible,
    count,
    totalPrice,
    customerName,
    customerSurname,
    customerEmail,
    closeModal
  } = props;

  const message = `Thank you ${customerName} ${customerSurname} for your order`;
  const userEmail = `E-mail: ${customerEmail}`;
  const productsQuantity = `Quantity: ${count}`;
  const overalPrice = `Price: ${totalPrice}`;

  return (
    <SuccessOrder.Wrapper isVisible={isVisible}>
      <SuccessOrder.Message>{message}</SuccessOrder.Message>
      <SuccessOrder.Email>{userEmail}</SuccessOrder.Email>
      <SuccessOrder.Count>{productsQuantity}</SuccessOrder.Count>
      <SuccessOrder.Price>{overalPrice}</SuccessOrder.Price>
      <SuccessOrder.CloseModal onClick={closeModal}>Close</SuccessOrder.CloseModal>
    </SuccessOrder.Wrapper>
  );
};

SuccessOrderComponent.defaultProps = {
  isVisible: true,
  count: 0,
  totalPrice: 0,
  customerName: '',
  customerSurname: '',
  customerEmail: '',
  closeModal: null
};

export default SuccessOrderComponent;
