'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.css';

const bgImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
];

export default function Hero() {
  const titleText = "Afra & Nishan";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundContainer}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={styles.backgroundImage}
          >
            <Image
              src={bgImages[currentImageIndex]}
              alt="Background"
              fill
              unoptimized={true}
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className={styles.overlay}></div>
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h2 
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Join us to celebrate the 
          <motion.span 
            className={`${styles.nikkahWord} calligraphy`}
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          >
             {' '}Nikkah{' '}
          </motion.span>
          of
        </motion.h2>
        
        <div className={styles.namesContainer}>
          {titleText.split('').map((char, index) => (
            <motion.span
              key={index}
              className={`${styles.names} calligraphy`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.1, type: "spring", stiffness: 100 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3.5, duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <div className={styles.line}></div>
      </motion.div>
    </section>
  );
}
