// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <AboutUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;