import React, { Component } from 'react';

// Components
import ContentContainer from './ContentContainer';
import Carousel from './Carousel';

// Styles & Animations
import '../styles/Media.scss';
import { animateCss } from '../utils/animate';

class Media extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    this.setState({ loading: false });
    this.enterAnimation();
    console.log('Media mounted');
  };

  componentWillUnmount = () => {
    console.log('Media unmounted');
  };

  handleCloseButton = () => {
    console.log('clicked');
    this.setState({ loading: true });
    this.closeAnimation();
    setTimeout(() => {
      // this.props.toggleNavBarDisplay('media');
      window.location.replace('/');
    }, 1500);
  };

  closeAnimation = () => {
    animateCss('.close-icon', 'rotateOut');
  };

  enterAnimation = () => {
    animateCss('.close-icon', 'rotateIn');
  };

  render() {
    const { loading } = this.state;
    return (
      <div id="media">
        <ContentContainer
          header="Media"
          handleCloseButton={!loading ? this.handleCloseButton : null}
        >
          <h3 className="ui header intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            possimus?
          </h3>

          <Carousel
            infiniteLoop
            autoPlay
            emulateTouch
            showThumbs={false}
            showStatus={false}
          />
        </ContentContainer>
      </div>
    );
  }
}

export default Media;
