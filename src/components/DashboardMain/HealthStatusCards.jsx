import React from 'react';
import styles from '../../styles/HealthStatusCards.module.css';

const cardData = [
  {
    icon: '🫁',
    title: 'Lungs',
    date: '26 Ot 2021',
    progressColor: '#f25767',
    progress: 60,
  },
  {
    icon: '🦷',
    title: 'Teeth',
    date: '26 Oct 2021',
    progressColor: '#34d399',
    progress: 80,
  },
  {
    icon: '🦴',
    title: 'Bone',
    date: '26 Oct 2021',
    progressColor: '#fb923c',
    progress: 40,
  },
];

const HealthStatusCards = () => {
  return (
    <div className={styles.cardWrapper}>
      {cardData.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.header}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.title}>{item.title}</span>
          </div>
          <div className={styles.date}>Date: {item.date}</div>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${item.progress}%`, backgroundColor: item.progressColor }}
            />
          </div>
        </div>
      ))}
      <div className={styles.detailsLink}>
        Details <span className={styles.arrow}>→</span>
      </div>
    </div>
  );
};

export default HealthStatusCards;
