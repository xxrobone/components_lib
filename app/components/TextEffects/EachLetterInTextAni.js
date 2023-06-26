'use client';
import React, { useRef, useEffect } from 'react';
import styles from './EachLetter.module.scss';

const EachLetterInTextAni = ({ text }) => {
  const textRef = useRef();
  const letterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('entry ', entry);

      /* if (entry.isIntersecting) {
        textRef.current.classList.add(`${styles.animate}`);
        textRef.current.classList.add(`${styles.animate}`);
        textRef.current.classList.remove(`${styles.stop}`);
      } else {
        textRef.current.classList.remove(`${styles.animate}`);
        textRef.current.classList.add(`${styles.stop}`);
      } */

      /*    if (!entry.isIntersecting) {
      observer.unobserve(entry);
    } else {
    } */
    });
    observer.observe(textRef.current);
  }, []);

  return (
    <h2 ref={textRef} className={`${styles.textToSplit} ${styles.fadeInRight}`}>
      {text.split(' ').map((word, idx) => {
        return (
          <span key={idx} className={styles.word}>
            {word.split('').map((letter, i) => {
              return (
                <span className={`${styles.textSplit}`} ref={letterRef} key={i}>
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </h2>
    /* 
    blue print html
    the classes used in css for animations and in js for splitting the text,
    have to rework this for react ;D... challenge!!!
    
     <h2 class="textSplit fadeInRight stop">This is me</h2>
  
            <h2 class="textSplit fadeInRight stop">My developer work</h2>
 
 
            <h2 class="textSplit fadeInRight stop">Inspiration Ideas Creativity</h2>

   
            <h2 class="textSplit fadeInRight stop">Creativity art design and technology</h2>

            <h2 class="textSplit fadeInRight stop">My work as a dancer</h2>

      
            <h2 class="textSplit fadeInRight stop">Dance and code? Connection?</h2>

    
    */
  );
};

export default EachLetterInTextAni;

/* 
The blue print from my portfolio website


let arr = Array.from(document.querySelectorAll('.textSplit'));
 
let winHeight = window.innerHeight;


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      let trgt = e.target.className;
      trgt = '';
      for (const child of e.target.children) {
        if (e.isIntersecting) {
          child.classList.add('animate');
          child.classList.remove('stop');
        } else {
          child.classList.remove('animate');
          child.classList.add('stop');
        }
      }
      if (e.isIntersecting) {
        observer.unobserve(e.target);
      } else {
      }
    });
  },
  {
    threshold: 1,
    rootMargin: '10px',
  }
);

arr.forEach((a) => {
  let textLineArr = a.textContent.split(' ');


  let html = '';

  let animation = a.classList;

  for (i = 0; i < textLineArr.length; ++i) {
    html +=
      " <span style='animation-delay:" +
      i * 200 +
      "ms; display:inline-block' class='" +
      animation +
      "'>" +
      textLineArr[i] +
      '</span>';

    a.innerHTML = html;

    a.classList.remove('textSplit', 'stop');
});

arr.forEach((a) => {
  observer.observe(a);
});

function replaceClass(classN, newClassN) {
  let target = document.getElementsByClassName(`${classN}`)[1];
  target.className = newClassN;
}
*/

/*
const TextAnimation = ({ text }) => {
  const { ref: textRef, inView: textIsVisible } = useInView();
  const { ref: letterRef, inView: letterIsVisible } = useInView();

  textIsVisible ? console.log('is visible') : console.log('not visible');
  letterIsVisible
    ? console.log('letter is visible')
    : console.log('not visible');

  return (
    <h2
      ref={textRef}
      className={`${styles.textToSplit} ${styles.fadeInRight} ${
        textIsVisible ? styles.stop : styles.animate
      }`}
    >
      {text.split(' ').map((word, idx) => {
        return (
          <span key={idx}>
            {word.split('').map((letter, i) => {
              return (
                <span className={`${styles.textSplit}`} ref={letterRef} key={i}>
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </h2>

*/
