import styled from 'styled-components';

const Home = {};

Home.Wrapper = styled.div`
  margin-top: 50px;
  height: 94.7vh;
  overflow: hidden;
  color: white;
`;

Home.BackgroundContainer = styled.div`
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('https://img1.goodfon.com/wallpaper/nbig/d/ae/liga-chempionov-lch-stadion.jpg')
      no-repeat center;
  background-size: cover;
  height: 100%;
`;

Home.DescriptionContent = styled.div`
  text-align: center;
  width: 600px;
  margin: 0 auto;
  font-size: 24px;
`;

Home.Header = styled.h1`
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 32px;
`;

Home.Description = styled.p`
  & > * {
    padding: 5px;
  }
`;

Home.ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  border: none;
  padding: 15px 30px;
  text-indent: 1px;
  cursor: pointer;
  background-color: #333;
  & > * {
    color: white;
    text-decoration: none;
    font-family: monospace;
    font-size: 18px;
  }
  &:hover {
    background-color: #111;
  }
`;

export default Home;
