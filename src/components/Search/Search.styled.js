import styled from 'styled-components';

const Search = {};

Search.Wrapper = styled.div`
  float: right;
`;

Search.Header = styled.h3``;

Search.InputWrapper = styled.div``;

Search.Form = styled.form``;

Search.InputSeach = styled.input`
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
`;

Search.ButtonSearch = styled.button`
  position: relative;
  float: right;
  padding: 16px 16px;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url('http://blog.getgoodrank.ru/wp-content/uploads/2017/07/0ea6cb91-d5c9-4303-8525-3816f816adbd.png')
      no-repeat center;
    background-size: contain;
  }
  &:hover {
    background: #ccc;
  }
`;

export default Search;
