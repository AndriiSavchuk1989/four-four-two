import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.styled';
import SearchComponent from '../Search/Search.component';

const HeaderComponent = () => (
  <Header.Wrapper>
    <Header.LinkItem>
      <Link to="/">Home</Link>
    </Header.LinkItem>
    <Header.LinkItem>
      <Link to="/products">Products</Link>
    </Header.LinkItem>
    <Header.LinkItem>
      <Link to="/basket">Basket</Link>
    </Header.LinkItem>
    <SearchComponent />
  </Header.Wrapper>
);
export default HeaderComponent;
