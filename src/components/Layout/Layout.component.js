import React from 'react';

import Layout from './Layout.styled';

type Props = {
  children?: any
};

const LayoutComponent = ({ children }: Props) => (
  <Layout.Wrapper>
    <Layout.ChildrenContainer>{children}</Layout.ChildrenContainer>
  </Layout.Wrapper>
);

LayoutComponent.defaultProps = {
  children: null
};

export default LayoutComponent;
