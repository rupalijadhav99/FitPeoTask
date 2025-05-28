import React from 'react';
import styles from '../../styles/AnatomySection.module.css';
import anatomyImg from '../../assets/anatomy.jpg';
import HealthStatusCards from './HealthStatusCards';

const AnatomySection = () => {
  return (
    <div className={styles.anatomyContainer}>
      {/* Left: Anatomy Image + Labels */}
      <div className={styles.anatomyBox}>
        <div>
          <img src={anatomyImg} alt="Human Anatomy" className={styles.anatomyImage} />
        </div>
        <div className={`${styles.label} ${styles.heart}`}>❤️ Healthy Heart</div>
        <div className={`${styles.label} ${styles.leg}`}>🦵 Healthy Leg</div>
      </div>

      {/* Right: Health Cards from external component */}
      <div className={styles.cardSection}>
        <HealthStatusCards />
      </div>
    </div>
  );
};

export default AnatomySection;
