import styled, { css } from 'styled-components';

const ProductsList = {};

ProductsList.Wrapper = styled.div(({ type }) => {
  const justifyContent = type === 'basket' ? 'flex-start' : 'center';

  return css`
    display: flex;
    margin-top: 50px;
    align-items: flex-start;
    max-width: 100vw;
    flex-wrap: wrap;
    // position: relative;
    justify-content: ${justifyContent};
`;
});

export default ProductsList;
