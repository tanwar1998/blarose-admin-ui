import React, { Component } from 'react';
import CarosuleComponent from '../../../components/CarosuleComponent/index.jsx';
import Slider1 from '../../../assets/img/home-slider11.jpg';
import Slider2 from '../../../assets/img/home-slider2.jpg';
import Slider3 from '../../../assets/img/home-slider3.jpg';
import Slider4 from '../../../assets/img/home-slider4.jpg';

const images = [
    {
        img: Slider1
    },
    {
        img: Slider2
    },
    {
        img: Slider3
    },
    {
        img: Slider4
    },
]




export default function LandingComponent() {
    return (
      <div className='hor-row landing-slider-container'>
        <CarosuleComponent
            style = {{height: 'calc(100vh - 95px)'}}>

            {
                images.map((data)=>(
                    <div className='hor-row slider-img-container'>
                        <img src = { data.img } />
                        <div className='hor-row img-outer'>
                            <div className='hor-row landing-text'>
                                LIFESTYLE AND FASHION EXHIBITIONS
                            </div>
                        </div>
                    </div>
                ))
            }
        </CarosuleComponent>
      </div>
    );
  }