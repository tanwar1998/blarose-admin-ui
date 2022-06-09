import React from 'react';
import Story from '../../../assets/img/title-bottom.png';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';


const services = [
    {
        heading: 'LIFESTYLE & FASHION EXHIBITIONS',
        list: [
            {
                label: 'B2C Exhibitions: Blarose Lifestyle & Fashion Exhibition'
            },
            {
                label: 'B2B Exhibition: India International'
            }
        ]
    },
    {
        heading: 'WEDDING PLANNING',
        list: [
            {
                label: 'Wedding Planning & Design'
            },
            {
                label: 'Destination Weddings'
            }
        ]
    },
    {
        heading: 'EVENT PLANNING',
        list: [
            {
                label: 'Product launches'
            },
            {
                label: 'RWA Activations'
            }
        ]
    },
]

export default function Service() {
    return (
      <div className='hor-row container-main success-story-container service-container-main'>
        <h2>OUR CORE SERVICES</h2>
        <div className='hor-row success-story-img-container'>
          <img src= {Story} alt='story'/>
        </div>
        <div className='hor-row service-card-container'>

            { services.map((item, index)=>(
                <div className='hor-row service-card-main' key = { 'item' + index}>
                    <div className='hor-row heading-main'>
                        <MiscellaneousServicesIcon className='service-icon'/>
                        { item.heading }
                    </div>
                    { item.list.map((subItem, j) =>(
                        <div className='hor-row info-list' key = { 'subitem' + j}>
                            { (j+1) + ') ' + subItem.label }
                        </div>
                    ))}
                    
                </div>
            )) }
        </div>
      </div>
    );
  }