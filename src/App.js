import React from "react";
import './App.css';

import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    // BEM
    
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<CheckoutPage/>} exact/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    
  );
}

export default App;
