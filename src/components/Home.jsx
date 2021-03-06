import React, { Component } from 'react';
import '../styles/Home.scss';
import { animateCss } from '../utils/animate';

// Components
import About from './About';
import Contact from './Contact';
import Media from './Media';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: true,
      loading: true,
      about: false,
      contact: false,
      media: false,
    };

    this._isMounted = false;
  }

  componentDidMount = () => {
    const { showNavBar } = this.state;
    showNavBar && this.fadeIn();
    this._isMounted = true;
    this.setState({ loading: false });
  };

  componentWillUnmount = () => {
    console.log('unmounting');
  };

  toggleComponentDisplay = e => {
    const name = e.currentTarget.innerText.toLowerCase();
    this.fadeOut();
    setTimeout(() => {
      this.setState({
        [name]: !this.state[name],
        showNavBar: !this.state.showNavBar,
      });
    }, 1500);
  };

  onLinkClicked = e => {
    this._isMounted = false;
    this.setState({ loading: true });
    return this.toggleComponentDisplay(e);
  };

  handleEnterPressed = event => {
    if (event.keyCode === 13) {
      const { loading } = this.state;
      return this._isMounted && !loading ? this.onLinkClicked : null;
    }
    return null;
  };

  fadeOut = () => {
    animateCss('.about', 'fadeOutLeft');
    animateCss('.media', 'fadeOutRight');
    animateCss('.contact', 'fadeOut');
    // home does not unMount, need a way to control when to allow onLinkClicked
    // to be active after 1 second
    // so when we navigate back to Home, the links work.
    setTimeout(() => {
      return (this._isMounted = true);
    }, 1500);
  };

  fadeIn = () => {
    animateCss('.about', 'fadeInLeft');
    animateCss('.media', 'fadeInRight');
    animateCss('.contact', 'fadeIn');
  };

  toggleNavBarDisplay = name => {
    const { showNavBar } = this.state;
    this.setState({ showNavBar: !showNavBar, [name]: !this.state[name] });
  };

  render() {
    const { contact, about, media, showNavBar, loading } = this.state;

    return (
      <div id="home">
        <div className="home-overlay">
          {/* NAV BAR STARTS HERE */}
          {showNavBar && (
            <nav id="navbar" role="menu">
              <span className="about">
                <span
                  className="ui inverted blue basic button "
                  onKeyPress={this.handleEnterPressed}
                  role="menuitem"
                  tabIndex="0"
                  onClick={
                    this._isMounted && !loading ? this.onLinkClicked : null
                  }
                >
                  About
                </span>
              </span>

              <span className="contact">
                <span
                  className="ui inverted violet basic button "
                  onKeyPress={this.handleEnterPressed}
                  role="menuitem"
                  tabIndex="-1"
                  onClick={
                    this._isMounted && !loading ? this.onLinkClicked : null
                  }
                >
                  Contact
                </span>
              </span>
              <span className="media">
                <span
                  className="ui inverted purple basic button"
                  role="menuitem"
                  tabIndex="-1"
                  onKeyPress={this.handleEnterPressed}
                  onClick={
                    this._isMounted && !loading ? this.onLinkClicked : null
                  }
                >
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
