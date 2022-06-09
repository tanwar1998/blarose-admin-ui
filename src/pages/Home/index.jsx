import React from 'react';
import LandingComponent from './components/landing.jsx';
import {HomeContainer} from './style.js';
import Navbar from '../../specificComponents/navbar/index.jsx';
import Contempolary from  './components/creativeCotempolary';
import SuccessStory from './components/successStory.jsx';
import PremierProperty from './components/premierProperty.jsx';
import Service from './components/service.jsx';
import Register from './components/register.jsx';


export default function Invoices() {
    return (
      <>
        <Navbar/>
        <HomeContainer>
          <LandingComponent/>
          <Contempolary/>
          <SuccessStory/>
          <PremierProperty/>
          <Service/>
          <Register/>
        </HomeContainer>
      </>
    );
  }