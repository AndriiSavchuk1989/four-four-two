import React, { Component } from 'react';

import Search from './Search.styled';

class SearchComponent extends Component {

  render() {
    return (
      <Search.Wrapper>
        <Search.Wrapper>
          <Search.Form>
            <Search.InputSeach
              type="text"
              placeholder="Search"
            />
            <Search.ButtonSearch />
          </Search.Form>
        </Search.Wrapper>
      </Search.Wrapper>
    );
  }
};

export default SearchComponent;
