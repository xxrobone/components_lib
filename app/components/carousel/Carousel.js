import React from 'react'

import styles from './Carousel.module.scss'
const Carousel = ({ children }) => {
    
    const nextItem = () => {
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft += slideWidth;
    }

    const prevItem = () => {
        const slideWidth = slide.clientWidth;
        slideContainer.scrollLeft -= slideWidth;
    }
    
    return (
      <>
    <div className={styles.slider}>
                <button className={`${styles.slide_arrow} ${prev_btn}`}
                onClick={prevItem}>
        <span>&#8249;</span>
    </button>
                <button className={`${styles.slide_arrow} ${next_btn}`}
                onClick={nextItem}>
        <span>&#8250;</span>
    </button>
    <ul className={styles.slider_container}>
       {children}
    </ul>
</div>
      </>
  )
}

export default Carousel