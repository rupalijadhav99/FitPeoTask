import React from 'react';
import styles from '../../styles/ActivityFeed.module.css';
import { activityData, activityColors } from '../../data/activityData';

const ActivityFeed = () => {
  return (
    <div className={styles.activityCard}>
      <div className={styles.header}>
        <h3>Activity</h3>
        <span>3 appointments this week</span>
      </div>
      <div className={styles.chart}>
        {activityData.map((item, idx) => (
          <div key={idx} className={styles.column}>
            <div className={styles.barGroup}>
              {Array.isArray(item.bars) ? (
                item.bars.map((height, i) => (
                  <div
                    key={i}
                    className={styles.bar}
                    style={{
                      height: `${height}px`,
                      backgroundColor: height > 0 ? activityColors[i % 2] : activityColors[2],
                    }}
                  />
                ))
              ) : (
                <div>Error: Invalid bar data</div>
              )}
            </div>
            <span className={styles.day}>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;