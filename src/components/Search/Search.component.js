import React, { Component } from 'react';
import { connect } from 'react-redux';

// styles
import Search from './Search.styled';

type Props = {
  isAbleToSearch?: Boolean
};

class SearchComponent extends Component<Props> {
  render() {
    const { isAbleToSearch } = this.props;

    return (
      isAbleToSearch && (
      <Search.Wrapper>
        <Search.Wrapper>
          <Search.Form>
            <Search.InputSeach
              type="text"
              placeholder="Type to search..."
            />
            <Search.ButtonSearch />
          </Search.Form>
        </Search.Wrapper>
      </Search.Wrapper>
      ));
  }
}

SearchComponent.defaultProps = {
  isAbleToSearch: false
};

const mapStateToProps = ({ search }) => ({
  isAbleToSearch: search.isAbleToSearch
});

export default connect(mapStateToProps)(SearchComponent);
