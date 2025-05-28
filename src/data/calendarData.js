// src/data/calendarData.js

export const calendarDates = [25, 26, 27, 28, 29, 30, 31];

export const calendarDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const calendarSlots = {
  25: { times: ['10:00', '11:00', '12:00'] },
  26: {
    times: ['08:00', '09:00', '10:00'],
    highlight: '09:00',
    columnStyle: {
      background: '#e9e9e9',
      borderRadius: '10px',
    },
  },
  27: { times: ['12:00', '----', '13:00'] },
  28: {
    times: ['10:00', '11:00', '----'],
    highlight: '11:00',
    highlightOpacity: 0.5,
  },
  29: {
    times: ['----', '14:00', '16:00'],
  },
  30: {
    times: ['12:00', '14:00', '15:00'],
    highlight: '12:00',
    highlightOpacity: 0.5,
  },
  31: {
    times: ['09:00', '10:00', '11:00'],
    highlight: '09:00',
    highlightOpacity: 0.5,
    dim: true,
  },
};

export const calendarAppointments = [
  {
    type: 'Dentist 🦷',
    time: '09:00–11:00',
    doctor: 'Dr. Cameron Williamson',
    maxWidth: '150px',
    typeStyle: 'primary',
    style: { color: '#fff' }
  },
  {
    type: 'Physiotherapy Appointment 💪',
    time: '11:00–12:00',
    doctor: 'Dr. Kevin Djones',
    maxWidth: '220px',
    typeStyle: 'secondary',
  },
];
