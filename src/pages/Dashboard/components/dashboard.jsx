import React from 'react';
import Slides from './slides.jsx';

export default function Home(props) {
  // const [email, setEmail] = useState('');



    return (
      <div className='hor-row home-container-main'>
        <div className='hor-row container-main'>
          <h2>
            Home page 
          </h2>

          <div className='hor-row tabs-container-main'>
            <span className='tab-item selected-tab'>
              Slides
            </span>
            <span className='tab-item'>
              Services
            </span>
            <span className='tab-item'>
              Success stories
            </span>
            <span className='tab-item'>
              Premier Properties
            </span>
            <span className='tab-item'>
              Experience
            </span>
          </div>

          <Slides
            { ...props }/>

        </div>

      </div>
    );
  }