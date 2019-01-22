import React, { Component } from 'react';
import { animateCss } from '../utils/animate';

// Styles
import '../styles/Contact.scss';

// Components
import ContentContainer from './ContentContainer';

class Contact extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('Contact mounted');

    if (this.state.loading) {
      animateCss('.contact-details', 'fadeInLeft');
      animateCss('.form-content', 'fadeInRight');
      animateCss('.close-icon', 'rotateIn');
      this.setState({ loading: false });
    }
  };

  componentWillUnmount = () => {
    console.log('Contact Unmounted');
  };

  closeAnimation = () => {
    animateCss('.close-icon', 'rotateOut');
    animateCss('.contact-details', 'fadeOutLeft');
    animateCss('.form-content', 'fadeOutRight');
    animateCss('.content-container', 'fadeOut');

    setTimeout(() => {
      this.props.toggleNavBarDisplay('contact');
    }, 1500);
  };

  handleCloseButton = () => {
    this.closeAnimation();
  };

  render() {
    return (
      <div id='contact'>
        <ContentContainer
          header={'Contact'}
          handleCloseButton={this.handleCloseButton}>
          <div className='contact-content'>
            {/* DETAILS SECTION */}
            <section className='contact-details '>
              <h5 className='contact-me-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                animi deleniti. Dolor laborum impedit tempora minus adipisci
                quia tenetur officiis dolores at, possimus atque earum doloribus
                dolore tempore dicta qui.
              </h5>

              <div className='email-icon'>
                <i className='envelope outline icon' />
                <span className='text-content'>DJName@example.com</span>
              </div>

              <div className='website-icon'>
                <i className='globe icon' />
                <span className='text-content'>www.DJName.com</span>
              </div>

              <div className='facebook-icon'>
                <i className='facebook f icon' />
                <span className='text-content'>DJName Profile Link</span>
              </div>

              <div className='instagram-icon'>
                <i className='instagram icon' />
                <span className='text-content'>@DJName</span>
              </div>
            </section>
            {/* CONTACT FORM  */}
            <section className='form-content '>
              <form className='ui form'>
                <div className='field'>
                  <input type='text' name='name' placeholder='Name' rows='5' />
                </div>
                <div className='field'>
                  <input type='text' name='email' placeholder='Email Address' />
                </div>

                <div className='field'>
                  <textarea placeholder='Shoot me a Line!' />
                </div>

                <button className='ui button submit-button' type='submit'>
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
