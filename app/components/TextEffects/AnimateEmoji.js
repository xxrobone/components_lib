'use client';
import styles from './AnimateEmoji.module.scss';
import { useInView } from 'react-intersection-observer';

export const AnimateEmoji = () => {
  const { ref: aniRef, inView: emojiIsVisible } = useInView();
  return (
    <div ref={aniRef}>
      <span
        className={`${styles.emoji} ${
          emojiIsVisible ? styles.animate_emoji : ''
        }`}
      >
        🤓
      </span>
    </div>
  );
};
