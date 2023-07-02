import React from 'react';

import Toc from '../components/shortBiography/Toc';
import ContentList from '../components/shortBiography/CollectionList';
import { data } from '../components/shortBiography/data';

// styles
import styles from './ShortBios.module.scss';

// WIKI PAGE
const page = () => {
  return <div className={styles.main_wrapper}>
    <Toc />
    <ContentList data={data} />
  </div>;
};

export default page;
