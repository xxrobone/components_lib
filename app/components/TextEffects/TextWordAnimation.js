'use client';
import React, { useRef, useState, useEffect } from 'react';
import './TextWordAnimation.scss';

const TextWordAnimation = ({ text, animationStyle }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  /* const letterRef = useRef(); */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '-20px', threshold: 1 }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(`animate`);
      ref.current.classList.remove(`stop`);
      ref.current.querySelectorAll('span').forEach((el, i) => {
        el.classList.add(`animate`);
        el.classList.add(animationStyle);
        el.classList.remove(`stop`);
        el.style.animationDelay = `${i * 200}ms`;
        el.style.display = 'inline-block';
      });
    } else {
      ref.current.classList.remove(`animate`);
      ref.current.classList.add(`stop`);
      /*  ref.current.querySelectorAll('span').forEach((el) => {
        console.log(el);
        el.classList.remove(`${styles.animate}`);
        el.classList.add(`${styles.stop}${styles.textSplit}`);
      }); */
    }
  }, [isIntersecting]);

  return (
    <h2 ref={ref} className={`textSplit ${animationStyle} stop`}>
      {text.split(' ').map((word, idx) => {
        return (
          <span key={idx} className={`stop}`}>
            {word}
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

export default TextWordAnimation;

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
