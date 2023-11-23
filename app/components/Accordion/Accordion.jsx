'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import styles from './Accordion.module.scss';

export default function Accordion(props) {
  const { id, title, desc, openAccordions, toggleAccordion } = props;

  const handleToggle = () => {
    toggleAccordion(id);
  };

  const isOpen = openAccordions.includes(id);

  const Title = () => (
    <motion.button
      onClick={handleToggle}
      initial={false}
      animate={{ backgroundColor: isOpen ? '#333333' : 'black' }}
    >
      {title}
      <span>{isOpen ? <FiArrowUpCircle /> : <FiArrowDownCircle />}</span>
    </motion.button>
  );

  const Desc = () => (
    <motion.div
      className={styles.answer}
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
    >
      {desc}
    </motion.div>
  );

  return (
    <motion.div
      className={styles.accordion_wrapper}
      layout
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <motion.div
        className={styles.accordion}
        layout
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <Title />
        <Desc />
      </motion.div>
    </motion.div>
  );
}
