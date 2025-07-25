import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Programs from './pages/Programs/Programs';
import Plans from './pages/Plans/Plans';
import Testimonials from './pages/Testimonials/Testimonials';
import Reasons from './pages/Reason/Reasons';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
};

export default App;
