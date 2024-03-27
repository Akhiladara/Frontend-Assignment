import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from './components/Navbar'
import HomePage from './Other Pages/HomePage';
import AboutUs from './Other Pages/AboutUs';
import ContactUs from './Other Pages/ContactUs';
import History from './Other Pages/History';
import Organization from './Other Pages/Organization';
import Wallet from './Other Pages/Wallet';
import Notifications from "./Other Pages/Notifications";
import Settings from './Other Pages/Settings';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/history" element={<History />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </Navbar>
      </BrowserRouter>
    </div>
  )
}

export default App