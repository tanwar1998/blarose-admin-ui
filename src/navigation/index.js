import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import App from "./App";
import Home from "../pages/Home/index.jsx";
import AboutUs from "../pages/aboutUS/index.jsx";

export default function App() {
    return(
        <BrowserRouter>
            <Routes >

                <Route path="/home" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />

            </Routes>
        </BrowserRouter>
    )
};