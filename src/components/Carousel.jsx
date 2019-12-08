import React from 'react';
import PropTypes from 'prop-types';

// React Responsive Carousel Library
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import girls from '../images/girls.jpeg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
/**
 * @TODO clean up the static markup and have a list prop passed to the wrapper
 * Finish HOC implementation for props
 *
 * @IMAGES need to be preformatted, as they leave black space and not aligned
 *  */

const CarouselWrapper = props => (
  <Carousel {...props}>
    {/* <div>
      <img
        style={{ maxWidth: '100%', maxHeight: '80%' }}
        src={girls}
        alt=""
        srcSet=""
      />
    </div> */}
    <div>
      <img
        // style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={img1}
        alt=""
        srcSet=""
      />
    </div>

    <div>
      <img
        // style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={img2}
        alt=""
        srcSet=""
      />
    </div>

    <div>
      <img
        // style={{ maxWidth: '100%', maxHeight: '100%' }}
        src={img3}
        alt=""
        srcSet=""
      />
    </div>
  </Carousel>
);

export default CarouselWrapper;
