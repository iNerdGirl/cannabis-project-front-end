import React from 'react';
import './ImgCarousel.css';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: './cannibas1.jpg',
    altText: 'OG Kush',
    caption: 'OG Kush'
  },
  {
    src: './cannibas2.jpg',
    altText: 'Northern Lights',
    caption: 'Northern Lights'
  }
]

const ImgCarousel = () => {
  return(
    <div className='container'>
      <UncontrolledCarousel items={items} />
    </div>
  );
}

export default ImgCarousel;