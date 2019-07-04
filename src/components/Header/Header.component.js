import React from 'react';

// styles
import Header from './Header.styled';

// components
import SearchComponent from '../Search/Search.component';

const links = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/products',
    text: 'Products'
  },
  {
    link: '/basket',
    text: 'Basket'
  },
  {
    link: '/registration',
    text: 'Registration'
  }
];

const activeStyles = {
  color: 'rgba(210, 255, 82, 1)'
};

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = { current: '' };
  }

  render() {
    const renderedLinks = links.map(({ link, text }) => (
      <Header.NavLink
        key={link}
        exact
        to={link}
        activeStyle={activeStyles}
      >
        { text }
      </Header.NavLink>
    ));

    return (
      <Header.Wrapper>
        {renderedLinks}
        <SearchComponent />
      </Header.Wrapper>
    );
  }
}

export default HeaderComponent;
