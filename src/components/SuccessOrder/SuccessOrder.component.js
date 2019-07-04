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

  return (
    <SuccessOrder.Wrapper isVisible={isVisible}>
      <SuccessOrder.Name>{ message }</SuccessOrder.Name>
      <SuccessOrder.Surname>
        Surname:
        {customerSurname}
      </SuccessOrder.Surname>
      <SuccessOrder.Email>
        Email:
        {customerEmail}
      </SuccessOrder.Email>
      <SuccessOrder.Count>
        Quantity:
        {count}
      </SuccessOrder.Count>
      <SuccessOrder.Price>
        Price:
        {totalPrice}
      </SuccessOrder.Price>
      <SuccessOrder.CloseModal onClick={closeModal}>
        Close
      </SuccessOrder.CloseModal>
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
