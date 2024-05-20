import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarosel = () => {
  const items = mainCarouselData.map((item, index) => (
    <div key={index} style={{ maxHeight: '74vh' }}> 
      <img
        className='cursor-pointer'
        role='presentation'
        src={item.image}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items} 
      infinite
      disableButtonsControls
      autoPlay
      autoPlayInterval={5000}
      controlsStrategy="alternate"
      style={{ maxHeight: '80vh'}}
    />
  );
};

export default MainCarosel;
