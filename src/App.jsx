import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage"
import MensPage from "./pages/MensPage";
import WomensPage from "./pages/WomensPage";
import KidsPage from "./pages/KidsPage";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product"


const App = () => {

  return (

    <Router>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:category" element={<ProductsList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/kids" element={< KidsPage />} />
      </Routes>

    </Router>

  );
};

export default App;
