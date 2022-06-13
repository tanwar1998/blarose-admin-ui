import React from 'react';

const work = [
    {
        label: '1000+',
        text: 'EXHIBITORS'
    },
    {
        label: '16+',
        text: 'YEARS OF EXPERIENCE'
    },
    {
        label: '1000+',
        text: 'BRANDS'
    },
]

export default function Work() {
    return (
    <div className='hor-row work-done-container-main'>
            <div className='hor-row bottom-block'></div>
        <div className='hor-row container-main work-content-main'>
            { work.map((item, index) => (
                <div className='hor-row work-card' key = { 'work' + index}>
                    <h2>
                        { item.label }
                    </h2>
                    <div className='hor-row work-under-line-container'>
                        <div className='work-under-line'></div>
                    </div>
                    <div className='hor-row work-text'>
                        { item.text }
                    </div>
                </div>
            )) }
        </div>
    </div>
    );
  }