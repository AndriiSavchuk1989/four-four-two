import React from 'react';

// style
import Header from './Header.styled';
import LinkItem from './LinkItem.component';
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

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = { current: '' };
  }

  stateHandler = value => {
    this.setState(() => { return { current: value }; });
  };

  render() {
    const renderedLinks = links.map((link, index) => (
      <>
        <LinkItem
          link={link}
          key={index.toString()}
          styleHandler={this.stateHandler}
        />
      </>
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
