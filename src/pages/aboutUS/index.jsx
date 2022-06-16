import React from 'react';
import AboutComponent from './components/about.jsx';
import {AboutContainer} from './style.js';
import OurTeam from './components/ourTeam.jsx';


export default function Invoices(props) {
    return (
        <AboutContainer>
          {props.component === 'about-us' && <AboutComponent/>}
          {props.component === 'our-team' && <OurTeam/>}
        </AboutContainer>
    );
  }