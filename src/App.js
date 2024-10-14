import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './pages/heroSection';
import ArrivalsSection from './pages/arrivalSection';
import Footer from './components/footer';
import ShopPaintings from './pages/shop';
import ProductPage from './pages/product';  // Import ProductPage component
import Login from './components/login';
import Signup from './components/signup';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <ArrivalsSection />
              <Footer />
            </>
          } />
          <Route path="/shop" element={
            <>
              <Navbar />
              <ShopPaintings />
              <Footer />
            </>
          } />

          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* New dynamic route for individual product pages */}
          <Route path="/product/:productId" element={
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
