import React, { Component } from 'react';
import '../styles/Home.scss';

export default class Home extends Component {
  state = {
    showNavBar: true
  };

  componentDidMount = () => {
    // this.toggleNavBarDisplay();
    console.log('Home mounted');
  };

  componentWillUnmount = () => {
    console.log('Home unmounted');
  };

  toggleNavBarDisplay = () => {
    this.setState({ showNavBar: !this.state.showNavBar });
  };

  render() {
    const { showNavBar } = this.state;

    return (
      <div id='home'>
        <div className='home-overlay'>
          {/* NAV BAR STARTS HERE */}
          {showNavBar && (
            <nav id='navbar' className='ui container'>
              <span
                className='ui inverted blue basic button'
                onClick={this.props.toggleNavBarDisplay}>
                About
              </span>

              <span
                className='ui inverted violet basic button'
                onClick={this.props.toggleNavBarDisplay}>
                Contact
              </span>

              <span
                className='ui inverted purple basic button'
                onClick={this.props.toggleNavBarDisplay}>
                Media
              </span>
            </nav>
          )}
        </div>
      </div>
    );
  }
}
