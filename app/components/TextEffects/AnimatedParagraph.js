'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './AnimatedParagraph.module.scss';
export const AnimatedParagraph = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-0px' }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className={styles.main}>
      <section></section>
      <section ref={ref}>
        <p>
          <span>Some stuff written here to see animation</span>
          <span>
            Some stuff written here to see animation Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates, consequuntur!
          </span>
        </p>
      </section>
      <section></section>
    </div>
  );
};
