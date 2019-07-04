import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = {};

Header.Wrapper = styled.ul`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1;
  list-style-type: none;
  font-size: 18px;
`;

Header.LinkItem = styled.li`
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
  & > * {
    color: white;
    text-decoration: none;
    font-family: monospace;
  }
`;

Header.NavLink = styled(NavLink)`
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #111;
  }
  & > * {
    color: white;
    text-decoration: none;
    font-family: monospace;
  }
`;

export default Header;
