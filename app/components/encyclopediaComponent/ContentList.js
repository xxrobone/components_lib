'use client';
import React from 'react';
import ContentItem from './ContentItem';
// styles
import styles from './ContentList.module.scss';

const ContentList = ({ data }) => {
  return (
    <div className={styles.content_list}>
      {data.map((data, i) => (
        // item here
        <div key={data.id}>
          <ContentItem {...data} />
        </div>
      ))}
    </div>
  );
};

export default ContentList;
