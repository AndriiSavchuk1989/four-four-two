import React, {Component} from 'react';
import VideoBackground from './VideoBackground.styled'

class VideoBackgroundComponent extends Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4'
    }
  }

  render () {
    return (
      <VideoBackground.Video loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
      </VideoBackground.Video>
    )
  }
};

export default VideoBackgroundComponent;
