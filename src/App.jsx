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
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import Classes from './pages/Classes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const noSidebarRoutes = ['/login', '/signup'];

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: 'flex' }}>
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {!noSidebarRoutes.includes(location.pathname) && (
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
        )}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
          <Route
            path="/madaris"
            element={<PrivateRoute><Madaris /></PrivateRoute>}
          />
          <Route
            path="/classes"
            element={<PrivateRoute><Classes /></PrivateRoute>}
          />
          <Route
            path="/students"
            element={<PrivateRoute><Students /></PrivateRoute>}
          />
          <Route
            path="/exams"
            element={<PrivateRoute><Exams /></PrivateRoute>}
          />
          <Route
            path="/marks"
            element={<PrivateRoute><Marks /></PrivateRoute>}
          />
          <Route
            path="/reports"
            element={<PrivateRoute><Reports /></PrivateRoute>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
