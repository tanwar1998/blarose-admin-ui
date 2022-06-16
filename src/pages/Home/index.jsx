import React from 'react';
import LandingComponent from './components/landing.jsx';
import {HomeContainer} from './style.js';
import Contempolary from  './components/creativeCotempolary';
import SuccessStory from './components/successStory.jsx';
import PremierProperty from './components/premierProperty.jsx';
import Service from './components/service.jsx';
import Register from './components/register.jsx';
import Work from './components/work.jsx';



export default function Invoices() {
    return (
        <HomeContainer>
          <LandingComponent/>
          <Contempolary/>
          <SuccessStory/>
          <PremierProperty/>
          <Service/>
          <Register/>
          <Work/>
        </HomeContainer>
    );
  }