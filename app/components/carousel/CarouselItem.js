import React from 'react';
import Image from 'next/image';

import styles from './Carousel.module.scss';

const CarouselItem = ({ img, title, text }) => {
  return (
    <li class={styles.slide}>
      <Image className={styles.img} fill src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default CarouselItem;
