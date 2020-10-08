import React from 'react';
import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Extra from './components/Extra'
import NotFound from './components/NotFound'
import More from './components/More'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header />

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Extra" element={<Extra />} />
      <Route path="/More" element={<More />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
      </div>
  );
}

export default App;
