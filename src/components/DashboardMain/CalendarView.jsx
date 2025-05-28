import React from 'react';
import styles from '../../styles/CalendarView.module.css';
import { calendarDates, calendarDays, calendarSlots, calendarAppointments } from '../../data/calendarData';

const CalendarView = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <span>October 2021</span>
      </div>

      <div className={styles.calendarGrid}>
        <div className={styles.daysGrid}>
          {calendarDates.map((date, idx) => {
            const slotInfo = calendarSlots[date]; // ✅ FIXED
            const isDim = slotInfo?.dim;

            return (
              <div
                key={date}
                className={`${styles.dayColumn} ${isDim ? styles.dim : ''}`}
                style={slotInfo?.columnStyle || {}}
              >
                <div className={styles.dayLabel}>
                  <div>{calendarDays[idx]}</div>
                  <div className={styles.date}>{date}</div>
                </div>

                <div className={styles.slots}>
                  {slotInfo?.times.map((time, i) => {
                    const isHighlighted = time === slotInfo?.highlight;

                    const highlightStyle = isHighlighted
                      ? {
                          ...(slotInfo?.highlightStyle || {}),
                          ...(slotInfo?.highlightOpacity
                            ? { opacity: slotInfo.highlightOpacity }
                            : {}),
                        }
                      : {};

                    return (
                      <div
                        key={i}
                        className={
                          isHighlighted
                            ? styles.slotHighlight
                            : styles.slotLight
                        }
                        style={highlightStyle}
                      >
                        {time}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.appointments}>
        {calendarAppointments.map((appointment, idx) => (
          <div
            key={idx}
            className={`${styles.appointmentCard} ${
              appointment.type === 'primary' ? styles.primary : ''
            }`}
            style={{ maxWidth: appointment.maxWidth || 'auto' }}
          >
            <div style={{ fontWeight: 'bold' }}>{appointment.title}</div>
            <div>{appointment.time}</div>
            {appointment.doctor && (
              <div style={{ fontSize: '11px' }}>{appointment.doctor}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
