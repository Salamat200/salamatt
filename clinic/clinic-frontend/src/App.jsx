import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HospitalLandingPage from './components/HospitalLandingPage';
import Sidebar from './Sidebar';
import './App.css'
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Complaints from './components/Complaints';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HospitalLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;
