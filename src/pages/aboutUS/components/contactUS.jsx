import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InputComponent from '../../../components/InputComponent/index.jsx';
import TextAreaComponent from '../../../components/TextAreaComponent/index.jsx';
import ButtonComponent from '../../../components/ButtonComponent/index.jsx';


export default function ContactUS() {
    return (
      <div className='hor-row contact-us-container-main'>
        <div className='hor-row contact-us-back-image'>
          <div className='contact-content-back'>
            <div>
              Contact Us
            </div>
          </div>
        </div>
        <div className='hor-row container-main'>
          <div className='hor-row contact-content-main'>
            <div className = 'hor-row contact-detail-content'>
              <h4>
                Want To Exhibit With Us?
              </h4>
              <h3>
                Send Us An Email OR Give Us A Call.
              </h3>
              <div className='hor-row under-line-row'>
                <span></span>
              </div>
              <div className='hor-row content-row'>
                <HomeIcon className='icon'/>
                D-239, Sushant Arcade, Next to Hotel Courtyard by Marriott, Gurugram
              </div>
              <div className='hor-row content-row'>
                <CallIcon className='icon'/>
                +91-9910347962, 8743003700
              </div>
              <div className='hor-row content-row'>
                <EmailIcon className='icon'/>
                <a href='mailto:contact@blarose.com'>contact@blarose.com</a>
              </div>
            </div>

            <div className='hor-row contact-detail-content contact-us-form-container'>
              <h4>
                Drop Us A Line
              </h4>
              <h3>
                We'd Love To Hear From You.
              </h3>
              <div className='hor-row under-line-row'>
                <span></span>
              </div>
              <div className='hor-row contact-form-content'>

              <div className='hor-row two-element-container'>
                    <InputComponent
                        placeholder = 'Your Name*'/>
                </div>
                <div className='hor-row two-element-container'>
                    <InputComponent
                        placeholder = 'Email*'/>
                </div>
                <div className='hor-row two-element-container'>
                    <InputComponent
                        placeholder = 'Phone*'/>
                </div>
                <div className='hor-row'>
                    <TextAreaComponent
                        placeholder = 'Please type your message here*'/>
                </div>
                <div className='hor-row button-main'>
                    <ButtonComponent label = 'Submit Details' />
                </div>
              </div>

            </div>
          </div>

          <div className='hor-row google-map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3625464.6217415617!2d76.34184780886994!3d27.45391355824079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d26.4938856!2d80.2791464!4m5!1s0x390d19af9f0ca041%3A0x39c1b2f7a85d835c!2sblarose+D-239%2C+Sushant+Arcade%2C+Next+to+Hotel+Courtyard+by+Marriott%2C+Gurugram!3m2!1d28.4702971!2d77.0750414!5e0!3m2!1sen!2sin!4v1554537266459!5m2!1sen!2sin" title = 'map' width="100%" height="300" frameborder="0" style={{border: '0'}} allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }