import React, { Component } from 'react';
import ContentContainer from './ContentContainer';
import '../styles/Media.scss';

class Media extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    console.log('Media mounted');
  };

  componentWillUnmount = () => {
    console.log('Media unmounted');
  };

  render() {
    return (
      <div id='media'>
        <ContentContainer header={'Media'} path={'/'}>
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
