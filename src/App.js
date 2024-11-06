import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import Settings from './pages/Settings';
import Login from'./pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;


