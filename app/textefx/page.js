import React from 'react';
import { TitleEfx } from '../components/TextEffects/TitleEfx';
import TextAnimation from '../components/TextEffects/TextAnimations';
//styles
import styles from './text.module.scss';
import { AnimateEmoji } from '../components/TextEffects/AnimateEmoji';
import { AnimatedParagraph } from '../components/TextEffects/AnimatedParagraph';
import TextWordAnimation from '../components/TextEffects/TextWordAnimation';

const page = () => {
  return (
    <div className={styles.texts}>
      <h2>Text effects</h2>
      <AnimatedParagraph />

       <div className={styles.component_wrapper}>
        <p>Hover to split text:</p>
        <TitleEfx title='The effect is in the text hover' />
      </div>
      <section>
        <TextAnimation text='Animate from right' animationVariant='fromRight' />
      </section>
      <section>
        <TextAnimation text='Animate from left' animationVariant='fromLeft' />
      </section>
      <section>
        <TextAnimation
          text='Animate from top to bottom'
          animationVariant='fromTop'
        />
      </section>
      <section>
        <TextAnimation
          text='Animate from bottom up'
          animationVariant='fromBottom'
        />
      </section>
      <section>
        <AnimateEmoji />
      </section>
 
      <section></section>
      <section>
        <TextWordAnimation
          text='Hello World! WE GOOD?!'
          animationStyle='fadeInRight'
        />
      </section>
      <section></section>
      <section>
        <TextWordAnimation
          text='Slide in from left Yoohooo!!!'
          animationStyle='slideInLeft'
        />
      </section>
      <section></section>
      <section>
        {' '}
        <TextWordAnimation
          text='Highlighting the text!!! A Bit longer what happends?'
          animationStyle='highlightText'
        />
      </section>
    </div>
  );
};

export default page;
