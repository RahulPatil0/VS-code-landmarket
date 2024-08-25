import React, { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Signup from './Component/Registration/Signup';
import Signin from './Component/Registration/Signin';
import SellProperty from './Component/SellProperty';
import BuyProperty from './Component/BuyProperty';
import PropertyDetails from './Component/PropertyDetails';
import Notification from './Component/Notification';
import PostHomeForSale from './Component/PostHomeForSale';
import HelpCenter from './Component/HelpCenter';
import HowToSell from './Redirect/HowToSell';
// Import or define HowToBuy component if needed
import HowToBuy from './Redirect/HowToBuy';
import Chatbox from "./Redirect/Chatbox";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  return (
    <div>
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup onRegister={handleLogin} />} />
        <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
        <Route
          path="/sell-property"
          element={isAuthenticated ? <SellProperty /> : <Navigate to="/signin" />}
        />
        <Route path="/buy-property" element={<BuyProperty />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/post-home-for-sale" element={<PostHomeForSale />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
        <Route path="/how-to-sell" element={<HowToSell />} />
        {/* Add route for HowToBuy if defined */}
        <Route path="/how-to-buy" element={<HowToBuy />} />
        <Route path="/chatbox" element={<Chatbox />} />

      </Routes>
    </div>
  );
};

export default App;
