import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMain/DashboardMainContent';

const App = () => {
  return (
    <div style={{ 
      height: '100vh', 
      fontFamily: 'sans-serif', 
      background: '#f3f4f6', 
      padding: '10px',      
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'flex',
        height: '100%',
        borderRadius: '30px',
        overflow: 'hidden',
        background: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
