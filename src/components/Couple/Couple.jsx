'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Couple.module.css';

export default function Couple() {
  return (
    <section className={styles.coupleSection}>
      <motion.div 
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div 
          className={styles.person}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/bride.png" 
              alt="Afra" 
              fill 
              className={styles.image} 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className={`${styles.name} calligraphy`}>Afra</h3>
          <p className={styles.description}>The Bride</p>
          <p className={styles.parents}>D/O Saleem & Rasya</p>
        </motion.div>

        <motion.div 
          className={styles.ampersand}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
          }}
        >
          <span className="calligraphy">&</span>
        </motion.div>

        <motion.div 
          className={styles.person}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/groom.png" 
              alt="Nishan" 
              fill 
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className={`${styles.name} calligraphy`}>Nishan</h3>
          <p className={styles.description}>The Groom</p>
          <p className={styles.parents}>S/O Saleem & Raseena</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
