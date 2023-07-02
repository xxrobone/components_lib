import styles from './Carousel.module.scss';
const Carousel = ({ children, handleNext, handlePrevious }) => {
  return (
    <>
      <button
        className={`${styles.slide_arrow} ${styles.prev_btn}`}
        onClick={handlePrevious}
      >
        <span>&#8249;</span>
      </button>
      <button
        className={`${styles.slide_arrow} ${styles.next_btn}`}
        onClick={handleNext}
      >
        <span>&#8250;</span>
      </button>
      <div className={styles.slider_container}>{children}</div>
    </>
  );
};

export default Carousel;
