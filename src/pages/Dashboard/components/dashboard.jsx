import React, { useState } from 'react';
import Slides from './slides.jsx';
import SuccessStory from './successStory.jsx';
import Service from './service.jsx';
import Experience from './experience.jsx';
import PPLocation from './ppLocation.jsx';
import PremierProperty from './premierProperties.jsx';

export default function Home(props) {
  const [currentComponent, setCurrentComponent] = useState('PPLocation');

  const elements = [
    {
      label: 'Slides',
      value: 'slides'
    },
    {
      label: 'Success stories',
      value: 'successStory'
    },
    {
      label: 'Services',
      value: 'service'
    },
    {
      label: 'Premier Properties',
      value: 'premierProperty'
    },
    {
      label: 'Premier Properties Location',
      value: 'PPLocation'
    },
    {
      label: 'Experience',
      value: 'experience'
    },
  ]



    return (
      <div className='hor-row home-container-main'>
        <div className='hor-row container-main'>
          <h2>
            Home page 
          </h2>

          <div className='hor-row tabs-container-main'>
            {
              elements.map((item)=>(
                <span className={'tab-item' + ( item.value === currentComponent ? ' selected-tab': '' ) }
                  key = { item.value } 
                  onClick = { ()=> setCurrentComponent(item.value)}
                  >
                  { item.label }
                </span>
              ))
            }
          </div>

            { currentComponent === 'slides' && <Slides
              { ...props }/>}
            {currentComponent === 'successStory' && <SuccessStory
              { ...props }/>}
            {currentComponent === 'experience' && <Experience
              { ...props }/>}
            {currentComponent === 'service' && <Service
              { ...props }/>}
            {currentComponent === 'premierProperty' && <PremierProperty
              { ...props }/>}
            {currentComponent === 'PPLocation' && <PPLocation
              { ...props }/>}
        </div>
      </div>
    );
  }