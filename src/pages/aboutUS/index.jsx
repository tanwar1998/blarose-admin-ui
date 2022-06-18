import React from 'react';
import AboutComponent from './components/about.jsx';
import {AboutContainer} from './style.js';
import OurTeam from './components/ourTeam.jsx';
import ContactUS from './components/contactUS.jsx';


export default function Invoices(props) {
    return (
        <AboutContainer>
          {props.component === 'about-us' && <AboutComponent/>}
          {props.component === 'our-team' && <OurTeam/>}
          {props.component === 'contact-us' && <ContactUS/>}
        </AboutContainer>
    );
  }