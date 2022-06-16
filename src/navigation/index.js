import React from 'react';
import {
//   BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import AboutUs from "../pages/aboutUS/index.jsx";
import Navbar from '../specificComponents/navbar/index.jsx';
import FooterContainer from '../specificComponents/footer/index.jsx';

export default function App() {
    return(
        <Router>
            <Navbar/>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs component = 'about-us'/>} />
                <Route path="our-team" element={<AboutUs component = 'our-team'/>} />
            </Routes>
            <FooterContainer/>
        </Router>
    )
};