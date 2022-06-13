import React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const property = [
    {
        city: 'Gurugram',
        localAddress: [
            { address: 'Epicentre, Apparel House - 1' },
            { address: 'Double Tree by Hilton Hotel -1' },
            { address: 'Courtyard by Marriott Hotel -7' },
            { address: 'Hilton Garden Inn Hotel -4' },
        ]
    },
    {
        city: 'Dehradun',
        localAddress: [
            { address: 'Hotel Madhuban -2' },
        ]
    },
    {
        city: 'Faridabad',
        localAddress: [
            { address: 'Radisson Blu Hotel: 1' },
        ]
    }
]

export default function PremierProperty() {
    return (
        <div className='hor-row container-main premier-property-container'>
        <h2>
            Premium Properties where we delivered our B2C shows/exhibitions.
        </h2>

        <div className='hor-row premier-back-container'></div>
        <div className='hor-row premier-card-container'>
            { property.map((item)=>(
                <div className='card-main'>
                    <div className='hor-row city-name'>
                        <AddLocationIcon className = 'location-icon'/>
                        { item.city }
                    </div>
                    { item.localAddress.map((add)=>(
                        <div className='hor-row local-address'>
                            { '>> ' + add.address }
                        </div>
                    ))}
                </div>
            ))}
        </div>
      </div>
    );
  }