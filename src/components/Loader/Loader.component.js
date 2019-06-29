import React from 'react';
import { FadeLoader } from 'react-spinners';

class LoaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <FadeLoader
          color="#123abc"
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoaderComponent;
