import React from 'react';
import { FadeLoader } from 'react-spinners';
import Loader from './Loader.styled';

class LoaderComponent extends React.Component {
  render() {
    return (
      <Loader.Wrapper>
        <FadeLoader
          color="rgba(210, 255, 82, 1)"
        />
      </Loader.Wrapper>
    );
  }
}

export default LoaderComponent;
