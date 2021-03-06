import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.3 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

const Transition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <main>{children}</main>
    </motion.div>
  );
};

export default Transition;
