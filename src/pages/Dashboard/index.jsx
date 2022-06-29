import React from 'react';
import { DashboardContainer } from './style.js';
import Dashboard from './components/dashboard.jsx';


export default function Container(props) {

    return (
        <DashboardContainer>
           <Dashboard
           />
        </DashboardContainer>
    );
  }