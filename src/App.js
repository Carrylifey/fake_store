import React from "react";
//import react router dom

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import pages

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
//import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Checkout from "./pages/Checkout";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
