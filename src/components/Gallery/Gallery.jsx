'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Gallery.module.css';

const images = [
  { id: 1, src: '/images/gallery/1.jpg' },
  { id: 2, src: '/images/gallery/2.jpg' },
  { id: 3, src: '/images/gallery/3.jpg' },
  { id: 4, src: '/images/gallery/4.jpg' },
  { id: 5, src: '/images/gallery/5.jpg' },
];

export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Our Moments</h2>
        <p className={styles.subtitle}>Hover to reveal</p>
      </motion.div>

      <div className={styles.grid}>
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover="hover"
          >
            <motion.div 
              className={styles.imageWrapper}
              variants={{
                hover: { filter: "blur(0px)", scale: 1.05 }
              }}
              initial={{ filter: "blur(15px)", scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={img.src}
                alt={`Gallery image ${img.id}`}
                fill
                unoptimized={true}
                className={styles.image}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
