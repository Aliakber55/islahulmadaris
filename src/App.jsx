import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Madaris from './pages/Madaris';
import Students from './pages/Students';
import Exams from './pages/Exams';
import Marks from './pages/Marks';
import Reports from './pages/Reports';
import Login from './pages/Login';
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
  const noSidebarRoutes = ['/login'];

  return (
    <div style={{ display: 'flex' }}>
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/madaris"
            element={
              <PrivateRoute>
                <Madaris />
              </PrivateRoute>
            }
          />
           <Route
            path="/classes"
            element={
              <PrivateRoute>
                <Classes />
              </PrivateRoute>
            }
          />
          <Route
            path="/students"
            element={
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            }
          />
          <Route
            path="/exams"
            element={
              <PrivateRoute>
                <Exams />
              </PrivateRoute>
            }
          />
          <Route
            path="/marks"
            element={
              <PrivateRoute>
                <Marks />
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
