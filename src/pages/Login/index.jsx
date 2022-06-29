import React from 'react';
import {LoginContainer} from './style.js';
import Login from './components/login.jsx';
import { postAPI, putAPI, getAPI } from '../../Services/basicApi.js';


export default function Container(props) {

  const loginUser = async(data) => {
    console.log('loginUser.>>>>>>>>>>>>>>>>>..',data)
    // const path = 'users/list1';
    const path = 'users/login';

    // const postData = await getAPI(path, data);
    const postData = await postAPI(path, data);


  }


    return (
        <LoginContainer>
           <Login
            loginUser =  { loginUser } />
        </LoginContainer>
    );
  }