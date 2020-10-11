import React from 'react';
import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Services from './components/Services'
import NotFound from './components/NotFound'
import More from './components/More'
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Header />

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/More" element={<More />} />
      <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
      </div>
  );
}

export default App;
