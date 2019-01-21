import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ContentContainer.scss';
import { animateCss } from '../utils/animate';

class ContentContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    animateCss('.content-container', 'fadeIn', () => {
      this.pulseHover();
      this.setState({ loading: false });
    });
  };

  pulseHover = () => animateCss('.close-icon', 'pulse');

  render() {
    const { header, children, handleCloseButton } = this.props;
    const { loading } = this.state;
    return (
      <div className='overlay'>
        <div className='ui container content-container'>
          {/* CLOSE BUTTON */}

          <section className='close-button-container'>
            <i
              className='close icon close-icon'
              onClick={!loading ? handleCloseButton : undefined}
              onMouseEnter={!loading ? this.pulseHover : undefined}
            />
            <span className='close-text'>Close</span>
          </section>

          {/* HEADER */}
          <section className='ui header title'>
            <h1>{header}</h1>
          </section>

          {/* Content */}

          {children && children}
        </div>
      </div>
    );
  }
}

ContentContainer.propTypes = {
  header: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default ContentContainer;
