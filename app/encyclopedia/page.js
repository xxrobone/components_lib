import React from 'react';

// styles
import styles from './Encyclo.module.scss';
import Toc from '../components/encyclopediaComponent/Toc';
import ContentList from '../components/encyclopediaComponent/ContentList';
import { data } from '../components/encyclopediaComponent/data';

// WIKI PAGE
const page = () => {
  return <div className={styles.main_enc}>
    <Toc />
    <ContentList data={data} />
  </div>;
};

export default page;
