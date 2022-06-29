import React from 'react';
import {
//   BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard/index.jsx";
import Login from "../pages/Login/index.jsx";
import Navbar from '../specificComponents/navbar/index.jsx';
import FooterContainer from '../specificComponents/footer/index.jsx';

export default function App() {
    return(
        <Router>
            <Navbar/>
            <Routes >
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
            <FooterContainer/>
        </Router>
    )
};