'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Countdown.module.css';

export default function Countdown() {
  const targetDate = new Date('2026-10-18T13:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // initial call
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Handle hydration mismatch by not rendering until mounted
  if (!timeLeft) return <section className={styles.countdownSection}></section>;

  return (
    <section className={styles.countdownSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.heading}>Time Until We Say "I Do"</h2>
        
        <div className={styles.timerGrid}>
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.days}</span>
            <span className={styles.label}>Days</span>
          </div>
          <div className={styles.separator}>:</div>
          
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className={styles.label}>Hours</span>
          </div>
          <div className={styles.separator}>:</div>
          
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className={styles.label}>Minutes</span>
          </div>
          <div className={styles.separator}>:</div>
          
          <div className={styles.timeBox}>
            <span className={styles.number}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
            <span className={styles.label}>Seconds</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
