'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DateReveal.module.css';

export default function DateReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className={styles.revealSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.content}
        >
          <h2 className={styles.heading}>Save The Date</h2>
          
          {!revealed ? (
            <motion.button 
              className={styles.revealButton}
              onClick={() => setRevealed(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              Click to Reveal
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.div
                className={styles.dateDisplay}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <div className={styles.dateBlock}>
                  <span className={styles.month}>October</span>
                  <span className={styles.day}>18</span>
                  <span className={styles.year}>2026</span>
                </div>
                <div className={styles.timeBlock}>
                  <p>1:00 PM</p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
