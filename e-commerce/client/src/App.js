import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Car from './pages/Car';
import Add from './pages/Add';
import Update from './pages/Update';
import Navbar from './navandfooter/Navbar';
import Footer from './navandfooter/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Car />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
