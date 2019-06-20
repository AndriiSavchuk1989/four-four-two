import styled, { css } from 'styled-components';

const Product = {};

const boot = 'https://image.flaticon.com/icons/svg/79/79828.svg';
const kit = 'https://image.flaticon.com/icons/svg/79/79693.svg';

Product.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  position: relative;
  min-height: 350px;
`;

Product.Image = styled.img`
  flex-basis: 200px;
  max-width: 75%;
`;

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
`;

Product.Name = styled.p`
  text-align: center;
`;

Product.Price = styled.p`
  text-align: center;
`;

Product.Country = styled.p``;

Product.Brand = styled.p``;

Product.ButtonsWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${Product.Wrapper}:hover & {
    visibility: visible;
  }
`;

Product.Button = styled.button`
  width: 80px;
  height: 80px;
  margin: 5px;
  border-radius: 40px;
  border: none;
  font-size: 16px;
  position: relative;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bolder;
`;

Product.InfoButton = styled(Product.Button)`
  & > * {
    background-size: 60px 60px;
    text-decoration: none;
    color: #000;
  }
`;

Product.AddToBasketButton = styled(Product.Button)`
  background-size: 60px 60px;
`;

export default Product;
