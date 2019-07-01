import styled, { css } from 'styled-components';

const SuccessOrder = {};

SuccessOrder.Wrapper = styled.div(({ isVisible }) => {
  const displayProp = isVisible ? 'block' : 'none';

  return css`
    display: ${displayProp};
    position: absolute;
    width: 500px;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;
});

SuccessOrder.Name = styled.p``;
SuccessOrder.Surname = styled.p``;
SuccessOrder.Count = styled.p``;
SuccessOrder.Price = styled.p``;
SuccessOrder.Email = styled.p``;
SuccessOrder.CloseModal = styled.button``;

export default SuccessOrder;
