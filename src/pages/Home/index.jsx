import React, { Component } from 'react';
import LandingComponent from './components/landing.jsx';
import {HomeContainer} from './style.js';
import Navbar from '../../specificComponents/navbar/index.jsx';


export default function Invoices() {
    return (
      <>
      <Navbar/>
        <HomeContainer>
          <LandingComponent/>
        </HomeContainer>
      </>
    );
  }