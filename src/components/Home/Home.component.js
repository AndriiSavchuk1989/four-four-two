import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home.styled';
import VideoBackgroundComponent from '../VideoBackground/VideoBackground.component';

const HomeComponent = () => {
  return (
    <Home.Wrapper>
      <Home.BackgroundContainer>
        <Home.DescriptionContent>
          <Home.Header>Four-Four-Two</Home.Header>
          <Home.Description>
            <p>If you a football fan and you got a favourite team?</p>
            <p>
              If you know what means EPL, Italian Serie A, German Bundesliga,
              Spanish Primera?
            </p>
            <p>Then you might be here and explore our staff!</p>
          </Home.Description>
        </Home.DescriptionContent>
        <Home.ButtonWrapper>
          <Link to="/products">Explore more</Link>
        </Home.ButtonWrapper>
      </Home.BackgroundContainer>
    </Home.Wrapper>
  );
};

export default HomeComponent;
