import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.styled';

type Props = {
  link?: Array<Object>,
  styleHandler?: Function
};

class LinkItem extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  onClickHandler = event => {
    this.props.styleHandler(event.target.innerText);
  };

  render() {
    const { link: { link, text } } = this.props;

    return (
      <Link to={link}>
        <Header.LinkItem onClick={this.onClickHandler}>{text}</Header.LinkItem>
      </Link>
    );
  }
}

LinkItem.defaultProps = {
  link: [],
  styleHandler: () => {}
};

export default LinkItem;
