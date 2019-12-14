import React, { Component } from 'react';
import { animateCss } from '../utils/animate';

// Syles
import '../styles/About.scss';

// Components
import ContentContainer from './ContentContainer';

class About extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    const { loading } = this.state;
    if (loading) {
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
    this.setState({ loading: true }, this.closeAnimation);
    setTimeout(() => {
      // this.props.toggleNavBarDisplay('about');
      window.location.replace('/');
    }, 1000);
  };

  render() {
    return (
      <div id="about">
        <ContentContainer
          header="DJ Ollggie"
          handleCloseButton={this.handleCloseButton}
        >
          <h3 className="ui header intro">
            Based out of Toronto and serving all surrounding areas. Helping
            parties and events become even more memoarable. Custom sets centered
            around three things I love; Music, People and Good Times!
          </h3>

          <div className="ui cards-segment">
            {/* CARD 1 - CUSTOM EXPERIENCE */}
            <section className="ui about-card card-1">
              <div className="wrapper">
                <h2 className="ui icon header ">
                  <i className="headphones icon" />
                  <div className="content icon-header">
                    Custom Experience
                    <div className="sub header">
                      Every event or party is unique. I customize every playlist
                      to perfectly match any venue, ambiance and your taste. I
                      even take special requests!
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className="divider" />

            {/* CARD 2 - VERSATILE SOUND */}
            <section className="ui about-card card-2">
              <div className="wrapper">
                <h2 className="ui icon header">
                  <i className="volume up icon" />
                  <div className="content icon-header">
                    Versatile Sound
                    <div className="sub header">
                      I have a wide array of music available to choose from. I
                      play House, Tech house, Deep House, Lounge, Electro Swing,
                      Disco Latina, Top 40 and just about everything to make
                      your guests dance!
                    </div>
                  </div>
                </h2>
              </div>
            </section>

            {/* Divider */}
            <section className="divider" />

            {/* CARD 3 - Relive The Moment */}
            <section className="ui about-card card-3">
              <div className="wrapper">
                <h2 className="ui icon header">
                  <i className="video icon" />
                  <div className="content icon-header">
                    Relive the Moment
                    <div className="sub header">
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
