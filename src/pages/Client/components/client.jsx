import React from 'react';
import Tooltip from '../../../components/Tooltip/index.jsx';
import Client1 from '../../../assets/img/client/nayira.jpg';
import Client2 from '../../../assets/img/client/blossom.jpg';
import Client3 from '../../../assets/img/client/doll.jpg';
import Client4 from '../../../assets/img/client/gems.jpg';
import Client5 from '../../../assets/img/client/hemant.jpg';

const clientList = [
  {
    link: '#',
    label: 'Nayerah',
    img: Client1
  },
  {
    link: '#',
    label: 'Blossom',
    img: Client2
  },
  {
    link: '#',
    label: 'Doll UP',
    img: Client3
  },
  {
    link: '#',
    label: 'Gems',
    img: Client4
  },
  {
    link: '#',
    label: 'Hemanthshree',
    img: Client5
  },
]



export default function Client() {
    return (
      <div className='hor-row client-us-container-main'>
        <div className='hor-row client-us-back-image'>
          <div className='client-content-back'>
            <div>
              Our Clients
            </div>
          </div>

        </div>
        <div className='hor-row client-us-content-main'>
          <div className='hor-row container-main'>
            <h3>
              CLIENTS
            </h3>
            <div className='hor-row under-line-content'>
              <span/>
            </div>
            <div className='hor-row client-content'>
              { clientList.map((item, index)=>(
                  <a href = {item.link}>
                    <div className='content-card' key = {'client' + index}>
                      <Tooltip title = { item.label }>
                        <img src = {item.img} alt = 'client' />
                      </Tooltip>
                    </div>
                  </a>
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }