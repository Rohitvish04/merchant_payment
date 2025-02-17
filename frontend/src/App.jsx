import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PaymentForm from './Components/PaymentForm';
 



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/login" element={<Login />} /> {/* Add this line */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;