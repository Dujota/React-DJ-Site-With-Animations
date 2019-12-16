import React, { Component } from 'react';
import { animateCss } from '../utils/animate';

// Styles
import '../styles/Contact.scss';

// Components
import ContentContainer from './ContentContainer';

class Contact extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    console.log('Contact mounted');
    const { loading } = this.state;
    if (loading) {
      this.enterAnimation();
      this.setState({ loading: false });
    }
  };

  componentWillUnmount = () => {
    console.log('Contact Unmounted');
  };

  enterAnimation = () => {
    animateCss('.contact-details', 'fadeInLeft');
    animateCss('.form-content', 'fadeInRight');
    animateCss('.close-icon', 'rotateIn');
  };

  closeAnimation = () => {
    animateCss('.close-icon', 'rotateOut');
    animateCss('.contact-details', 'fadeOutLeft');
    animateCss('.form-content', 'fadeOutRight');
    animateCss('.content-container', 'fadeOut');
  };

  handleCloseButton = () => {
    this.setState({ loading: true });
    this.closeAnimation();
    setTimeout(() => {
      // this.props.toggleNavBarDisplay('contact');
      window.location.replace('/');
    }, 1500);
  };

  render() {
    return (
      <div id="contact">
        <ContentContainer
          header="Get in Touch"
          handleCloseButton={this.handleCloseButton}
        >
          <div className="contact-content">
            {/* DETAILS SECTION */}
            <section className="contact-details ">
              <h5 className="contact-me-text">
                Contact me ahead of time if you want to schedule additional live
                music or performance
              </h5>

              {/* ICONS */}
              <div className="icon-container">
                <div className="email-icon">
                  <i className="envelope outline icon" />
                  <span className="text-content">Obushueva@gmail.com</span>
                </div>

                <div className="website-icon">
                  <i className="globe icon" />
                  <span className="text-content">MusicForever.bz</span>
                </div>

                <div className="facebook-icon">
                  <i className="facebook f icon" />
                  <span className="text-content">Olga.Bushuyeva</span>
                </div>

                <div className="instagram-icon">
                  <i className="instagram icon" />
                  <span className="text-content"> @Ollggie </span>
                </div>
              </div>
            </section>
            {/* CONTACT FORM  */}
            <section className="form-content ">
              <form className="ui form" name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />

                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    rows="5"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="field">
                  <textarea name="message" placeholder="Shoot me a Line!" />
                </div>

                <button className="ui button submit-button" type="submit">
                  Send
                </button>
              </form>
            </section>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default Contact;
