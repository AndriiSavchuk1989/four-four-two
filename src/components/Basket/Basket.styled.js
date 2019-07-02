import styled, { css } from 'styled-components';

const BasketWrapper = {};

BasketWrapper.Wrapper = styled.div(({ isVisible }) => {
  const displayProp = !isVisible ? 'flex' : 'none';

  return css`
     display: ${displayProp};
`;
});

BasketWrapper.EmptyBasket = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BasketWrapper;
