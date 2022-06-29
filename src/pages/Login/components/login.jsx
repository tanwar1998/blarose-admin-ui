import React, { useState, useEffect } from 'react';
import InputComponent from '../../../components/InputComponent/index.jsx';
import ButtonComponent from '../../../components/ButtonComponent/index.jsx';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData = ()=>{
    if(!email){
      window.alert('Please provide email');
      return;
    }else if(!password){
      window.alert('Please provide password')
      return;
    }

    props.loginUser({email, password})

  }

    return (
      <div className='hor-row login-container-main'>
        <h2>
          Admin Panel
        </h2>
        <div className='hor-row login-panel-container'>
          <div className='hor-row panel-row'>
            <InputComponent
              placeholder = 'Email'
              value  = {email}
              onChange = { setEmail }
              />
          </div>
          <div className='hor-row panel-row'>
            <InputComponent
              placeholder = 'password'
              type = 'password'
              value  = {password}
              onChange = { setPassword }
              />
          </div>

          <div className='hor-row panel-row'>
            <ButtonComponent
              label = 'Submit'
              onClick = { submitData }
              />
          </div>
          
        </div>
      </div>
    );
  }