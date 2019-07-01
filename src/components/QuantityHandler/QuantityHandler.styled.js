import styled from 'styled-components';

import Product from '../Product/Product.styled';

const QuantityHandler = {};

QuantityHandler.Wrapper = styled.div`
  display: flex;
  height: 16px;
`;

QuantityHandler.Button = styled.button`
  text-align: center;
  width: 50px;
`;

QuantityHandler.DecreaseButton = styled(Product.Button)`
  background-color: red;
`;

QuantityHandler.IncreaseButton = styled(Product.Button)`
  background-color: green;
`;

QuantityHandler.QuantityView = styled.p`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  line-height: 50px;
  background-color: white;
  text-align: center;
  padding: 0;
  margin: 5px;
`;

export default QuantityHandler;
