import React from 'react';
import './App.css';
import Header from './components/Header'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Extra from './components/Extra'
import NotFound from './components/NotFound'
import More from './components/More'
import Contact from './components/Contact'


function App() {
  return (
    <div className = 'background1'>
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Extra" element={<Extra />} />
      <Route path="/More" element={<More />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='*' element={<NotFound />} />

      </Routes>
      </div>
  );
}

export default App;
