import Tooltip from '../../../components/Tooltip/index.jsx';
import React from 'react';
import Gallery1 from '../../../assets/img/gallery/exhibitor1.jpg';
import Gallery2 from '../../../assets/img/gallery/exhibitor2.jpg';
import Gallery3 from '../../../assets/img/gallery/exhibitor3.jpg';
import Gallery4 from '../../../assets/img/gallery/exhibitor4.jpg';
import Gallery5 from '../../../assets/img/gallery/exhibitor5.jpg';
import Gallery6 from '../../../assets/img/gallery/featured-image-1.jpg';
import Gallery7 from '../../../assets/img/gallery/featured-image-2.jpg';
import Gallery8 from '../../../assets/img/gallery/featured-image-3.jpg';
import Gallery9 from '../../../assets/img/gallery/featured-image-4.jpg';


const galleryList = [
  {
    label: 'Nayerah',
    img: Gallery1
  },
  {
    label: 'Blossom',
    img: Gallery2
  },
  {
    label: 'Doll UP',
    img: Gallery3
  },
  {
    label: 'Gems',
    img: Gallery4
  },
  {
    label: 'Hemanthshree',
    img: Gallery5
  },
  {
    label: 'Hemanthshree',
    img: Gallery6
  },
  {
    label: 'Hemanthshree',
    img: Gallery7
  },
  {
    label: 'Hemanthshree',
    img: Gallery8
  },
  {
    label: 'Hemanthshree',
    img: Gallery9
  },
  {
    label: 'Hemanthshree',
    img: Gallery1
  },
]



export default function Client() {
    return (
      <div className='hor-row gallery-us-container-main'>
        <div className='hor-row gallery-us-back-image'>
          <div className='gallery-content-back'>
            <div>
              Snippets Of Our Past Exhibitions
            </div>
          </div>

        </div>
        <div className='hor-row gallery-us-content-main'>
          <div className='hor-row container-main'>
            <h3>
              GALLERY
            </h3>
            <div className='hor-row under-line-content'>
              <span/>
            </div>
            <div className='hor-row gallery-content'>
              { galleryList.map((item, index)=>(
                  <div className='content-card' key = {'gallery' + index}>
                    <Tooltip title = { item.label }>
                      <img src = {item.img} alt = 'gallery' />
                    </Tooltip>
                  </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }