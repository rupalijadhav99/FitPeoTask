import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import styles from '../../styles/DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.heading}>Dashboard</h2>
        <div className={styles.thisWeek}>
          This Week <span className={styles.arrow}>⌄</span>
        </div>

        <AnatomySection />
        <ActivityFeed />
      </div>

      <div className={styles.rightSection}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
