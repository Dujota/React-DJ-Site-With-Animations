import React, { Component } from 'react';
import '../styles/Home.scss';

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

  componentWillUnmount = () => {
    console.log('Home unmounted');
  };

  toggleComponentDisplay = e => {
    const name = e.currentTarget.innerText.toLowerCase();
    this.setState({
      [name]: !this.state[name],
      showNavBar: !this.state.showNavBar
    });
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
            <nav id='navbar' className='ui container'>
              <span
                className='ui inverted blue basic button about'
                onClick={this.toggleComponentDisplay}>
                About
              </span>

              <span
                className='ui inverted violet basic button contact'
                onClick={this.toggleComponentDisplay}>
                Contact
              </span>

              <span
                className='ui inverted purple basic button'
                onClick={this.toggleComponentDisplay}>
                Media
              </span>
            </nav>
          )}
          {contact && (
            <Contact toggleNavBarDisplay={this.toggleNavBarDisplay} />
          )}
          {about && <About />}
          {media && <Media />}
        </div>
      </div>
    );
  }
}
