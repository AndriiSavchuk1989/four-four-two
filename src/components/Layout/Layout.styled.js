import styled from 'styled-components';

const Layout = {};

Layout.Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

Layout.ChildrenContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  position: relative;
  padding: 16px;
  margin: 30px auto 0 auto;
`;

export default Layout;
