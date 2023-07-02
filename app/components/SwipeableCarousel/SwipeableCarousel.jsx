'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { carouselData } from '../carousel/CarouselData';
//
import './SwipeableCarousel.scss';
/* const { useState, useEffect, useCallback, useMemo, useRef } = React */
const FIRST_SLIDES = 0;
const LAST_SLIDES = carouselData.length - 1; // number of boxes
const SENSITIVITY = 25; // 1~99

const SwipeableCarousel = () => {
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);
  const [swipeInfo, setSwipeInfo] = useState({
    isSwiping: false,
    originX: 0,
    transitionX: 0,
  });
  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      if (swipeInfo.isSwiping) return;
      const currentPosition = e.clientX || parseInt(e.touches[0].clientX);
      ref.current.style.transition = undefined;
      ref.current.style.transform = undefined;
      setSwipeInfo((state) => ({
        ...state,
        isSwiping: true,
        originX: currentPosition,
      }));
    },
    [swipeInfo.isSwiping]
  );

  const onMouseMove = useCallback((e) => {
    setSwipeInfo((state) => ({
      ...state,
      transitionX: e.clientX - state.originX,
    }));
  }, []);

  const onTouchMove = useCallback((e) => {
    setSwipeInfo((state) => ({
      ...state,
      transitionX: parseInt(e.touches[0].clientX) - state.originX,
    }));
  }, []);

  const onMouseUp = useCallback(
    (e) => {
      const currentPosition =
        e.clientX || parseInt(e.changedTouches[0].clientX);
      const delta = Math.floor(
        ((currentPosition - swipeInfo.originX) / ref.current.clientWidth) * 100
      );
      setSwipeInfo((state) => ({
        ...state,
        isSwiping: false,
        transitionX: 0,
      }));
      if (delta < -SENSITIVITY) {
        if (current === LAST_SLIDES) return;
        ref.current.style.transition = 'all 0.3s ease-in-out';
        ref.current.style.transform = `translateX(-${current}00%)`;
        setCurrent(current + 1);
      } else if (delta > SENSITIVITY) {
        if (current === FIRST_SLIDES) return;
        ref.current.style.transition = 'all 0.3s ease-in-out';
        ref.current.style.transform = `translateX(-${current - 2}00%)`;
        setCurrent(current - 1);
      } else {
        ref.current.style.transition = 'all 0.3s ease-in-out';
      }
    },
    [current, swipeInfo.originX]
  );

  useEffect(() => {
    swipeInfo.isSwiping === true
      ? ref.current.parentNode.classList.add('swiping-active')
      : ref.current.parentNode.classList.remove('swiping-active');
  }, [swipeInfo.isSwiping]);

  useEffect(() => {
    if (swipeInfo.isSwiping) {
      document.addEventListener('mousemove', onMouseMove, { capture: true });
      document.addEventListener('mouseleave', onMouseUp, { capture: true });
      document.addEventListener('mouseup', onMouseUp, { capture: true });
      document.addEventListener('touchmove', onTouchMove, { capture: true });
      document.addEventListener('touchend', onMouseUp, { capture: true });
    }
    return () => {
      document.removeEventListener('mousemove', onMouseMove, { capture: true });
      document.removeEventListener('mouseleave', onMouseUp, { capture: true });
      document.removeEventListener('mouseup', onMouseUp, { capture: true });
      document.removeEventListener('touchmove', onTouchMove, { capture: true });
      document.removeEventListener('touchend', onMouseUp, { capture: true });
    };
  }, [swipeInfo.isSwiping]);

  useEffect(() => {
    const containerRef = ref.current;
    containerRef.addEventListener('touchstart', onMouseDown, {
      passive: false,
      capture: true,
    });
    return () =>
      containerRef.removeEventListener('touchstart', onMouseDown, {
        passive: false,
        capture: true,
      });
  }, [onMouseDown]);

  return (
    <div className='carousel-frame full-width'>
      <div
        className='carousel-box-container'
        style={{ left: `${swipeInfo.transitionX}px` }}
        onMouseDown={onMouseDown}
        ref={ref}
      >
        {carouselData.map((c, i) => (
          <div className='carousel-box' key={i}>
            Sensitivity : {SENSITIVITY} <br />
            isSwiping : {String(swipeInfo.isSwiping)} <br />
            originX :{swipeInfo.originX} <br />
            transitionX :{swipeInfo.transitionX} <br />
            current : {current} <br />
            {current === i ? (
 <Image
 alt={c.title}
 src={c.img}
 priority
 fill
 sizes="(min-width: 960px) 600px, auto"
/>
            ) : ''}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableCarousel;
