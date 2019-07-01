import styled from 'styled-components';

const BasketWrapper = {};

BasketWrapper.Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

BasketWrapper.EmptyBasket = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BasketWrapper;
