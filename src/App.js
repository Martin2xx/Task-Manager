import './App.css';
import React from'react';
import NavBarMenu from './Components/NavBarMenu/NavBarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage'
import { HashRouter } from "react-router-dom";


function App() {
  return (
    <>
    <HashRouter>
    <NavBarMenu />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/" element={<HomePage />} />
        
      </Routes>
    </HashRouter>
    </>
  )
}

export default App;
