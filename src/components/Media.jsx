import React, { Component } from 'react';

// Components
import ContentContainer from './ContentContainer';

// Styles & Animations
import '../styles/Media.scss';
import { animateCss } from '../utils/animate';

class Media extends Component {
  state = {
    loading: true
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
    return (
      <div id='media'>
        <ContentContainer
          header={'Media'}
          handleCloseButton={
            !this.state.loading ? this.handleCloseButton : null
          }>
          <h3 className='ui header intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod omnis
            soluta mollitia ex, enim quam ipsa incidunt vero reprehenderit, aut,
            dolor voluptates. Eaque, libero tenetur rerum nostrum consequuntur
            sit cupiditate.
          </h3>
        </ContentContainer>
      </div>
    );
  }
}

export default Media;
