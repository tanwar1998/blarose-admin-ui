import React, { useState, useEffect } from 'react';
import {LoginContainer} from './style.js';
import Login from './components/login.jsx';
import { postAPI } from '../../Services/basicApi.js';
import { connect } from "react-redux";
import { updateStore } from '../../Store/cacheAction';
import PERMANENT_ACTION from '../../Store/permanentAction';
import { Navigate } from 'react-router-dom';

function Container(props) {

  const [reDirect, setRedirect] = useState(false);

  useEffect(()=>{
    if(props.store.permanentData.data.user.isLogin){
      setRedirect(true);
    }
  }, [])

  const loginUser = async(data) => {
    const path = 'users/login';

    // const postData = await getAPI(path, data);
    const postData = await postAPI(path, data);


    if(postData){
      const permanentStoreData = {
          key: 'user',
          value: { 
              isLogin: true,
              ...postData.data
          }
      }
      props.updatePermanentStore(permanentStoreData);
      window.setTimeout(()=>{
        window.location.reload();
      },1500)


    }else{
      window.alert('wrong credentials!')
    }


  }

  const Component = () => {
    return(
        <LoginContainer>
           <Login
            loginUser =  { loginUser } />
        </LoginContainer>
    )
  }

    if (reDirect) {
      return <Navigate to='/'/>;
    }

    return <Component/>;
    // return (
    //     <></>
    // );
  }


  const mapStateToProps = (store) => {
    return {
        store,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateStore: item => dispatch(updateStore(item)),
        updatePermanentStore: item => dispatch(PERMANENT_ACTION.updateStoreKey(item)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);
