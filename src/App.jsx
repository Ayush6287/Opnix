import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

// 🌐 Public pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Pricing from "./Pages/Home/ServicesVh/Price/Pricing";

// 🔐 Auth pages (src root में हैं)
import Signup from "./Pages/ Signup.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/ Dashboard.jsx";

// 🛡️ Protected Route
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;