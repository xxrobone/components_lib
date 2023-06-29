'use client';
import { motion } from 'framer-motion';
import { data } from './data';
// styles
import styles from './Toc.module.scss';

export default function Toc() {
  return (
    <>
      <div className={styles.toc}>
        <ul>
          {data.map(({ id, name, href }, i) => (
            <motion.li
              key={id}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.2 }}
            >
              <a href={href} className={styles.toc_link}>
                {name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
