import React from 'react';
import Logo from '../../assets/img/logo.gif';
import { NavigationBarContainer } from './style.js';

const navItem = [
    {
        key: 'HOME'
    },
    {
        key: 'SERVICES'
    },
    {
        key: 'ABOUT US'
    },
    {
        key: 'CONTACT US'
    },
    {
        key: 'GALLERY'
    }
]

export default function Navbar() {


    return (
      <NavigationBarContainer>
          <div className='hor-row logo-container'>
            <img src={Logo} />
          </div>
          <div className='hor-row nav-item-container'>
              {navItem.map((item) => (
                    <div className='nav-item'>
                        { item.key }
                    </div>
              )) }
            
          </div>
      </NavigationBarContainer>
    );
  }