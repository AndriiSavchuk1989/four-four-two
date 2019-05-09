import React from 'react';

import Layout from './Layout.styled';

const LayoutComponent = ({ children }) => (
  <Layout.Wrapper>
    <Layout.ChildrenContainer>{children}</Layout.ChildrenContainer>
  </Layout.Wrapper>
);

export default LayoutComponent;
