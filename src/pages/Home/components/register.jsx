import React from 'react';
import Back1 from '../../../assets/img/back.jpg';
import Back2 from '../../../assets/img/back2.png';
import InputComponent from '../../../components/InputComponent/index.jsx';
import TextAreaComponent from '../../../components/TextAreaComponent/index.jsx';
import ButtonComponent from '../../../components/ButtonComponent/index.jsx';

export default function Register() {
    return (
      <div  className='hor-row register-container-main'>
          <div className='hor-row container-main register-content-main'>
              <div className='hor-row left-side-container'>
                  <div className='hor-row heading'>
                      Register Now For The Next Exhibition
                  </div>
                <div className='hor-row two-element-container'>
                    <InputComponent
                        placeholder = 'Full Name*'/>
                    <InputComponent
                        placeholder = 'Email*'/>
                </div>
                <div className='hor-row two-element-container'>
                    <InputComponent
                        placeholder = 'Phone*'/>
                    <InputComponent
                        placeholder = 'Company Name(if any)'/>
                </div>
                <div className='hor-row'>
                    <TextAreaComponent
                        placeholder = 'Please describe your business and requirements*'/>
                </div>
                <div className='hor-row button-main'>
                    <ButtonComponent label = 'Submit Details' />
                </div>
              </div>
              <div className='hor-row right-side-container'>
                <img src={Back2} />
              </div>
          </div>
      </div>
    );
  }