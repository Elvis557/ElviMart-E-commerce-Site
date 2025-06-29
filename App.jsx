import { useState } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './signup';
import Login from './login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import About from './About';
import Products from './Products';
import ProductList from './ProductList';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import Account from './Account.jsx';

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/account" element={<Account />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;