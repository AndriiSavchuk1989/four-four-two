import styled, { css, keyframes } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Product = {};

const boot = 'https://image.flaticon.com/icons/svg/79/79828.svg';
const kit = 'https://image.flaticon.com/icons/svg/79/79693.svg';
const info =
  'https://finbank.ru/wp-content/themes/specular/specular/img/info-icon.png';
const basket = 'https://image.flaticon.com/icons/png/512/34/34562.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.85;
  }
`;

const lifting = keyframes`
  0% {
    margin-top: 50%;
  }
  100% {
    margin-top: 0;
  }
`;

Product.Wrapper = styled.div(({ type }) => {
  const maxWidth = type === 'info' ? 'none' : '30%';

  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${maxWidth};
    min-width: 25%;
    position: relative;
    min-height: 350px;
    margin: 4px 4px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    background-color: white;
  `;
});

Product.Image = styled.img`
  flex-basis: 200px;
  max-width: 75%;
`;

Product.Discount = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 60px 60px 0 0;
  &:before {
    content: "-50%";
    color: red;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: top left;
    top: -35px;
    bottom: -50%;
    left: 5px;
  }
  border-color: rgba(210, 255, 82, 1) transparent transparent transparent;
  ${breakpoint('tablet')`
    border-width: 80px 80px 0 0;
    &:before {
    content: "-50%";
    color: red;
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: top left;
    top: -45px;
    bottom: -50%;
    left: 10px;
  }
  `}
`;

Product.Icon = styled.div(({ type }) => {
  let backgroundImage = '';

  if (type === 'kit') {
    backgroundImage = `${kit}`;
  } else {
    backgroundImage = `${boot}`;
  }

  return css`
    background-image: url(${backgroundImage});
    width: 25px;
    height: 25px;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 5px;
  `;
});

Product.ButtonBackground = styled.div(({ action }) => {
  let buttonBackground = '';

  if (action === 'info') {
    buttonBackground = `${info}`;
  } else {
    buttonBackground = `${basket}`;
  }

  return css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${buttonBackground});
    background-size: 30px 30px;
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  `;
});

Product.Details = styled.div`
  display: flex;
  flex-direction: column;
  ${Product.Wrapper}:hover & {
    visibility: hidden;
  }
`;

Product.Name = styled.p`
  font-size: 18px;
  text-align: center;
  height: 20px;
  overflow-y: hidden;
`;

Product.Country = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 2px;
`;

Product.Description = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 2px;
`;

Product.Price = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 2px;
`;

Product.Count = styled.p`
  text-align: center;
  font-size: 10px;
`;

Product.ButtonsWrapper = styled.div`
  display: flex;
  visibility: hidden;
  justify-content: space-evenly;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -75%);
  ${Product.Wrapper}:hover & {
    visibility: visible;
    animation: 0.35s ${fadeIn} ease-out, 0.35s ${lifting} ease-out;
  }
`;

Product.Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  position: relative;
  background-color: rgba(210, 255, 82, 1);
  cursor: pointer;
  outline: transparent;
  box-shadow: 0 0 10px rgba(210, 255, 82, 0.5);
  :hover {
    box-shadow: none;
    background-color: yellow;
  }
`;

Product.InfoButton = styled(Product.Button)``;

Product.AddToBasketButton = styled(Product.Button)``;

export default Product;
