import React from 'react';
import { TitleEfx } from '../components/TextEffects/TitleEfx';
import TextAnimation from '../components/TextEffects/TextAnimations';
//styles
import styles from './text.module.scss';

const page = () => {
  return (
    <div className={styles.texts}>
      <h2>Text effects</h2>

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
    </div>
  );
};

export default page;
