import React from 'react';
import styles from './TitleEfx.module.scss';

export const TitleEfx = ({ title }) => {
  return (
    <div className={styles.title}>
      {title.split(' ').map((word, idx) => {
        return (
          <div key={idx} className={styles.word}>
            {word.split('').map((letter, i) => {
              return (
                <div
                  className={styles.letter}
                  key={i}
                  /*  ref={(el) => {
                    itemsRef.current[i] = el;
                  }} */
                >
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
