import React from 'react';
import { TitleEfx } from '../components/TextEffects/TitleEfx';

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
    </div>
  );
};

export default page;
