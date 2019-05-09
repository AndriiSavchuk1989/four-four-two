import styled, { css } from 'styled-components';

const Product = {};

const boot = 'https://image.flaticon.com/icons/svg/79/79828.svg';
const kit = 'https://image.flaticon.com/icons/svg/79/79693.svg';

Product.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25%;
  position: relative;
`;

Product.Image = styled.img`
  display: block;
  flex-basis: 200px;
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
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: red;
    z-index: -1;
  }
`;

Product.InfoButton = styled(Product.Button)`
  background: url(${props => props.kit || props.boot}) no-repeat center;
  background-size: 60px 60px;
`;

Product.AddToBasketButton = styled(Product.Button)`
  background: url('https://image.flaticon.com/icons/png/512/60/60756.png')
    no-repeat center;
  background-size: 60px 60px;
`;

export default Product;
