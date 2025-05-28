import React from 'react';
import styles from '../../styles/UpcomingSchedule.module.css';
import { upcomingAppointments } from '../../data/appointments';

const UpcomingSchedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <h3 className={styles.heading}>The Upcoming Schedule</h3>

      {upcomingAppointments.map(({ day, appointments }, idx) => (
        <div className={styles.daySection} key={idx}>
          <p className={styles.dayLabel}>On {day}</p>
          <div className={styles.appointmentCardMain}>
            {appointments.map(({ title, time, icon, maxWidth }, i) => (
              <div
                key={i}
                className={styles.appointmentCard}
                style={{ maxWidth }}
              >
                <div>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.time}>{time}</div>
                </div>
                <div className={styles.emoji}>{icon}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
