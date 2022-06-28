import React from 'react';
import {LoginContainer} from './style.js';
import Login from './components/login.jsx';


export default function Container(props) {
    return (
        <LoginContainer>
           <Login/>
        </LoginContainer>
    );
  }