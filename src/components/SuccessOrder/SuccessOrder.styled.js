import styled, { css } from 'styled-components';

const SuccessOrder = {};

SuccessOrder.Wrapper = styled.div(({ isVisible }) => {
  const displayProp = isVisible ? 'block' : 'none';

  return css`
    display: ${displayProp};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
});

SuccessOrder.Name = styled.p``;
SuccessOrder.Surname = styled.p``;
SuccessOrder.Count = styled.p``;
SuccessOrder.Price = styled.p``;
SuccessOrder.Email = styled.p``;

export default SuccessOrder;
