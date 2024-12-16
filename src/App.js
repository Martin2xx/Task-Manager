import './App.css';
import React from'react';
import NavBarMenu from './Components/NavBarMenu/NavBarMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ContactUsPage from './Pages/ContactUs/ContactUs'

function App() {
  return (
    <>
    <NavBarMenu />
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>



    </>
  )
}

export default App;
