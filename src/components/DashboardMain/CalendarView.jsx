import React from 'react';
import styles from '../../styles/CalendarView.module.css';
import { calendarDates, calendarDays, calendarSlots, calendarAppointments } from '../../data/calendarData';

const CalendarView = () => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <span>October 2021</span>
        <div className={styles.arrows}>
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
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
            className={`${styles.appointmentCard} ${appointment.typeStyle === 'primary' ? styles.primary : ''}`}
            style={{ maxWidth: appointment.maxWidth, ...(appointment.style || {}) }}
          >
            <div className={styles.appointmentHeader}>
              {appointment.type}
              {appointment.icon && (
                <span className={styles.iconRight}>{appointment.icon}</span>
              )}
            </div>
            <div style={{ fontSize: '12px' }}>{appointment.time}</div>
            {appointment.doctor && (
              <div style={{ fontSize: '11px', marginTop: '-5px' }}>
                {appointment.doctor}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
