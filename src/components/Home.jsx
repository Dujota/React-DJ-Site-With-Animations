import React, { Component } from 'react';
import '../styles/Home.scss';
import { animateCss } from '../utils/animate';

// Components
import About from './About';
import Contact from './Contact';
import Media from './Media';

export default class Home extends Component {
  state = {
    showNavBar: true
  };

  componentDidMount = () => {
    console.log('Home mounted');
  };

  toggleComponentDisplay = e => {
    const name = e.currentTarget.innerText.toLowerCase();
    this.fadeOut();
    setTimeout(() => {
      this.setState({
        [name]: !this.state[name],
        showNavBar: !this.state.showNavBar
      });
    }, 2500);
  };

  fadeOut = () => {
    console.log('Fading Out');
    animateCss('.about', 'fadeOutLeft');
    animateCss('.media', 'fadeOutRight');
    animateCss('.contact', 'fadeOut');
  };

  fadeIn = () => {
    console.log('Fading In');
    animateCss('.about', 'fadeInLeft');
    animateCss('.media', 'fadeInRight');
    animateCss('.contact', 'fadeIn');
  };

  toggleNavBarDisplay = name => {
    const { showNavBar } = this.state;
    this.setState({ showNavBar: !showNavBar, [name]: !this.state[name] });
  };

  render() {
    const { contact, about, media, showNavBar } = this.state;

    return (
      <div id='home'>
        <div className='home-overlay'>
          {/* NAV BAR STARTS HERE */}
          {showNavBar && (
            <nav id='navbar'>
              <span className='about'>
                <span
                  className='ui inverted blue basic button '
                  onClick={this.toggleComponentDisplay}>
                  About
                </span>
              </span>

              <span className='contact'>
                <span
                  className='ui inverted violet basic button '
                  onClick={this.toggleComponentDisplay}>
                  Contact
                </span>
              </span>
              <span className='media'>
                <span
                  className='ui inverted purple basic button'
                  onClick={this.toggleComponentDisplay}>
                  Media
                </span>
              </span>
            </nav>
          )}
          {contact && (
            <Contact toggleNavBarDisplay={this.toggleNavBarDisplay} />
          )}
          {about && <About toggleNavBarDisplay={this.toggleNavBarDisplay} />}
          {media && <Media toggleNavBarDisplay={this.toggleNavBarDisplay} />}
        </div>
      </div>
    );
  }
}
