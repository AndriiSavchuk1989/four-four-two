import styled, { css } from 'styled-components';

const ProductsList = {};

ProductsList.Wrapper = styled.div(({ type }) => {
  const justifyContent = type === 'basket' ? 'flex-start' : 'center';
  const maxWidth = type === 'basket' ? '85vw' : '100vw';

  return css`
    display: flex;
    margin-top: 50px;
    align-items: flex-start;
    max-width: ${maxWidth};
    flex-wrap: wrap;
    justify-content: ${justifyContent};
`;
});

export default ProductsList;
