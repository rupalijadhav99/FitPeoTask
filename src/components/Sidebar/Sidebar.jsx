import React from 'react';
import styles from '../../styles/Sidebar.module.css';
import {
  LayoutDashboard,
  History,
  CalendarDays,
  ClipboardList,
  BarChart2,
  MessageCircle,
  Phone,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <span className={styles.logoPrimary}>Health</span>
        <span className={styles.logoSecondary}>care.</span>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>General</div>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>
            <LayoutDashboard className={styles.icon} /> Dashboard
          </li>
          <li className={styles.navItem}>
            <History className={styles.icon} /> History
          </li>
          <li className={styles.navItem}>
            <CalendarDays className={styles.icon} /> Calendar
          </li>
          <li className={styles.navItem}>
            <ClipboardList className={styles.icon} /> Appointments
          </li>
          <li className={styles.navItem}>
            <BarChart2 className={styles.icon} /> Statistics
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>Tools</div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <MessageCircle className={styles.icon} /> Chat
          </li>
          <li className={styles.navItem}>
            <Phone className={styles.icon} /> Support
          </li>
        </ul>
      </div>

      <div className={styles.settings}>
        <Settings className={styles.icon} /> Setting
      </div>
    </aside>
  );
};

export default Sidebar;
