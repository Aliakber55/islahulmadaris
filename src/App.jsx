import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Madaris from './pages/Madaris';
import Students from './pages/Students';
import Exams from './pages/Exams';
import Marks from './pages/Marks';
import Reports from './pages/Reports';
import Classes from './pages/Classes';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px', textAlign: 'right' }}>
          <button
            onClick={() => changeLanguage('en')}
            style={{
              marginRight: '10px',
              padding: '8px 12px',
              cursor: 'pointer',
              border: i18n.language === 'en' ? '2px solid #3f51b5' : '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: i18n.language === 'en' ? '#e8eaf6' : 'white'
            }}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('ur')}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              border: i18n.language === 'ur' ? '2px solid #3f51b5' : '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: i18n.language === 'ur' ? '#e8eaf6' : 'white'
            }}
          >
            اردو
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/madaris" element={<Madaris />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/students" element={<Students />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
