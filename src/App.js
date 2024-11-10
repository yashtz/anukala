import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './pages/heroSection';
import ArrivalsSection from './pages/arrivalSection';
import Footer from './components/footer';
import ShopPaintings from './pages/shop';
import ProductPage from './pages/product';
import CheckoutPage from './pages/CheckoutPage';
import Login from './components/login';
import Signup from './components/signup';
import About from './pages/about';
import Confirmation from './pages/confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <ArrivalsSection />
              <Footer />
            </>
          } />

          {/* Shop Page Route */}
          <Route path="/shop" element={
            <>
              <Navbar />
              <ShopPaintings />
              <Footer />
            </>
          } />

          {/* About Page Route */}
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          } />

          {/* Login & Signup Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Product Details Route */}
          <Route path="/product/:productId" element={
            <>
              <Navbar />
              <ProductPage />
              <Footer />
            </>
          } />

          {/* Checkout Page Route */}
          <Route path="/checkout" element={
            <>
              <Navbar />
              <CheckoutPage />
              <Footer />
            </>
          } />

          {/* Confirmation Page Route */}
          <Route path="/confirmation" element={
            <>
              <Navbar />
              <Confirmation />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;