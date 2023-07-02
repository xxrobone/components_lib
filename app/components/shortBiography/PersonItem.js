'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// styles
import styles from './PersonItem.module.scss';
const PersonItem = ({ name, desc, aka, id, img }, i) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.4, duration: 0.3 }}
      className={styles.item_wrapper}
      id={id}
    >
      <div className={styles.left_side}>
        <h2>{name}</h2>
        <div className={styles.image}>
          <Image
            src={`/images/${img}`}
            priority
            fill={true}
            alt={`image of ${name}`}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.aka}>{aka}</h1>
        <div className={styles.text}>{desc}</div>
      </div>
    </motion.div>
  );
};

export default PersonItem;
