'use client';
import React from 'react';
import ContentItem from './PersonItem';
// styles
import styles from './CollectionList.module.scss';

const CollectionList = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.map((data, i) => (
        // item here
        <div key={data.id}>
          <ContentItem {...data} />
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
