'use client';
import React, { useState } from 'react';
import Carousel from '../components/carousel/Carousel';
import CarouselItem from '../components/carousel/CarouselItem';
import { carouselData } from '../components/carousel/CarouselData';

//styles
import styles from './Slider.module.scss';

const page = () => {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const currentIndex = index - 1;
    setIndex(currentIndex < 0 ? carouselData.length - 1 : currentIndex);
  };

  const handleNext = () => {
    const currentIndex = index + 1;
    setIndex(currentIndex >= carouselData.length ? 0 : currentIndex);
  };

  return (
    <div className={styles.slider_wrapper}>
      <h2>Carousel / slider</h2>

      <Carousel handleNext={handleNext} handlePrevious={handlePrevious}>
        {carouselData ? (
          carouselData.map((c, i) => {
            if (index === i) {
              return (
                <div key={c.id}>
                  <CarouselItem {...c} />
                </div>
              );
            } else {
              return null;
            }
          })
        ) : (
          <span></span>
        )}
      </Carousel>
    </div>
  );
};

export default page;
