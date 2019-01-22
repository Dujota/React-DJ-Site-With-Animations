import React, { Component } from 'react';
import { animateCss } from '../utils/animate';

// Syles
import '../styles/About.scss';

// Components
import ContentContainer from './ContentContainer';

class About extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    if (this.state.loading) {
      animateCss('.close-icon', 'rotateIn');
      animateCss('.card-1', 'fadeInLeft');
      animateCss('.card-3', 'fadeInRight', this.setState({ loading: false }));
    }
  };

  closeAnimation = () => {
    animateCss('.close-icon', 'rotateOut');
    animateCss('.card-1', 'fadeOutLeft');
    animateCss('.card-3', 'fadeOutRight');
    animateCss('.content-container', 'fadeOut');
  };

  handleCloseButton = () => {
    this.closeAnimation();
    setTimeout(() => {
      this.props.toggleNavBarDisplay('about');
    }, 1500);
  };

  render() {
    return (
      <div id='about'>
        <ContentContainer
          header={'DJ NAME'}
          handleCloseButton={this.handleCloseButton}>
          <h3 className='ui header intro'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum
            reprehenderit recusandae nemo laudantium sit libero repellat modi,
            laboriosam quibusdam dolorum, culpa magnam. Minus, nostrum.
          </h3>

          <div className='ui cards-segment'>
            {/* CARD 1 */}
            <section className='ui about-card card-1'>
              <div className='wrapper'>
                <h2 className='ui icon header '>
                  <i className='headphones icon' />
                  <div className='content icon-header'>
                    Catchy Phrase
                    <div className='sub header'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem dicta distinctio deleniti suscipit labore
                      accusantium nisi dolor mollitia magnam animi.
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className='divider' />

            {/* CARD 2 */}
            <section className='ui about-card card-2'>
              <div className='wrapper'>
                <h2 className='ui icon header'>
                  <i className='volume up icon' />
                  <div className='content icon-header'>
                    Second Phrase
                    <div className='sub header'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente totam, odio rem odit consequuntur voluptas sunt
                      dolorum corporis. Minima, laudantium?
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className='divider' />

            {/* CARD 3 */}
            <section className='ui about-card card-3'>
              <div className='wrapper'>
                <h2 className='ui icon header'>
                  <i className='video icon' />
                  <div className='content icon-header'>
                    Video Thing
                    <div className='sub header'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Atque magni ex fugit reprehenderit deserunt quasi eum hic
                      molestias explicabo est.
                    </div>
                  </div>
                </h2>
              </div>
            </section>
          </div>
        </ContentContainer>
      </div>
    );
  }
}

export default About;
