import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ec.module.scss';

const ExpandableCard = ({
  title = 'The Lock',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit sed ullam ad perferendis autem voluptatibus in inventore impedi distinctio',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      transition={{ layout: { duration: 0.6, type: 'spring' } }}
      layout
      className={styles.card}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <motion.h2 layout>{title}</motion.h2>
      <motion.div>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {desc}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExpandableCard;
