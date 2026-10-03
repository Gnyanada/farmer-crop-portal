import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import FarmerDashboard from './pages/FarmerDashboard';
import AddCrop from './pages/AddCrop';
import MyCrops from './pages/MyCrops';
import HarvestHistory from './pages/HarvestHistory';
import AdminDashboard from './pages/AdminDashboard';
import ManageAdmins from './pages/ManageAdmins';
import ManageFarmers from './pages/ManageFarmers';
import Reports from './pages/Reports';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              {/* Farmer Protected Routes */}
              <Route
                path="/farmer-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['farmer']}>
                    <FarmerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-crop"
                element={
                  <ProtectedRoute allowedRoles={['farmer']}>
                    <AddCrop />
                  </ProtectedRoute>
                }
              />

              {/* Shared Crop Management Routes (Farmers & Admins) */}
              <Route
                path="/my-crops"
                element={
                  <ProtectedRoute allowedRoles={['farmer', 'admin']}>
                    <MyCrops />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/harvest-history"
                element={
                  <ProtectedRoute allowedRoles={['farmer', 'admin']}>
                    <HarvestHistory />
                  </ProtectedRoute>
                }
              />

              {/* Admin Protected Routes */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-admins"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <ManageAdmins />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/manage-farmers"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <ManageFarmers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <Reports />
                  </ProtectedRoute>
                }
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
