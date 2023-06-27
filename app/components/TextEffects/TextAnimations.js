'use client';
import styles from './TextAnimation.module.scss';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const fromRight = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
const fromLeft = {
  hidden: {
    x: 500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
const fromTop = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};
const fromBottom = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const TextAnimation = ({ text, animationVariant }) => {
  const { ref: textRef, inView: textIsVisible, entry } = useInView();

  /* console.log(animationVariant);

  textIsVisible ? console.log('is visible') : console.log('not visible'); */

  // changing animations to framer motion
  return (
    <motion.h2
      ref={textRef}
      className={`${styles.textInView}`}
      variants={
        (animationVariant === 'fromRight' ? fromRight : null) ||
        (animationVariant === 'fromLeft' ? fromLeft : null) ||
        (animationVariant === 'fromTop' ? fromTop : null) ||
        (animationVariant === 'fromBottom' ? fromBottom : null)
      }
      initial='hidden'
      animate={textIsVisible ? 'visible' : ''}
    >
      {text}
    </motion.h2>
  );
};

export default TextAnimation;
