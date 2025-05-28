import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div style={{ background: '#eef3fb', padding: '10px', marginBottom: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
      <span style={{ fontSize: '24px', marginRight: '10px' }}>{icon}</span>
      <div>
        <strong>{title}</strong>
        <p style={{ margin: 0, color: '#7c8ba1' }}>{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;