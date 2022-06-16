import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const aboutData = [
  {
    label: 'Blarose Lifestyle & Fashion Exhibition',
    date: '18th March, 2018',
    location: 'Radisson Blu, Faridabad',
    by: ''
  },
  {
    label: 'Blarose Lifestyle and Fashion Exhibition',
    date: '18th & 19th Aug, 2018',
    location: 'Courtyard',
    by: 'Marriott hotel, Gurugram'
  },
  {
    label: 'Blarose Lifestyle and Fashion Expo',
    date: '15th & 16th September, 2018 ',
    location: 'Double Tree',
    by: 'Hilton, Gurugram'
  },
  {
    label: 'Blarose Lifestyle & Fashion Expo ',
    date: '20th & 21st October, 2019',
    location: 'Courtyard',
    by: 'Marriott hotel, Gurugram'
  },
  {
    label: `Blarose Lifestyle and Fashion exhibition'Diwali Special`,
    date: '1st & 2nd November, 2018',
    location: 'Hilton Garden Inn, Gurugram',
    by: ''
  },
  {
    label: 'Blarose Winter Edition',
    date: '24th & 25th November, 2018',
    location: 'Courtyard',
    by: 'Marriott hotel, Gurugram'
  },
  {
    label: `Blarose Spring Edit '19`,
    date: '1st - 3rd February, 2019',
    location: 'Epicentre, Apparel house, Sector 44, Gurugram',
    by: ''
  },
  {
    label: 'Blarose Spring Fiesta',
    date: '9th-10th March, 2019',
    location: 'Nirvana Patio Club , Sector 50 , Gurugram',
    by: ''
  },
]


export default function About() {
    return (
      <div className='hor-row about-us-container-main'>
        <div className='hor-row about-us-back-image'></div>
        <div className='hor-row about-us-content-main'>
          <div className='hor-row container-main'>
            <h2>
              CREATIVELY CONTEMPORARY, UNIQUELY BLAROSE- THAT'S WHO WE ARE.
            </h2>
            <div className='hor-row about-us-content'>
              {`We are a team of experienced event planners, designers and organisers, based out of Gurugram. We love what we do and started our business in the year 2018 and bring along with us a wide and rich experience of over 15 years in the trade. This means, that although our company is fairly new, however our team members have worked & served with many corporates & event management companies before joining & starting Blarose. Blarose Trenta in our 2 years of its existence, has successfully ideated and delivered nearly 20 B2C- “ Blarose & Lifestyle Exhibitions” in 3 cities like Gurugram, Faridabad & Dehradun in premium 5 star hotels & clubs. Our exhibitions have attracted great footfalls and in 2 years of operation, we've had the privilege & fortune of serving over 1000 clients from various diverse sectors that includes leading Fashion designers, jewellery houses, retail outlets, and other leading brands and new age startup companies/entrepreneurs who started their journeys with us and are now well-known in their trade !!! In the year 2020, we also partnered with ASSOCHAM for our first B2B exhibition- India International Beauty Fair - Mumbai dated 27-28th feb 2020.`}
            </div>

            <div className='hor-row exhibition-content-main'>
              <h3>
                Our Success stories- B2C Exhibitions
              </h3>
              { aboutData.map((data, index)=>(
                <div className='hor-row exhibition-content' key = {'about' + index}>
                  <CheckIcon className='check-icon'/>
                  <span className=''>
                    Season {index + 1}: 
                  </span>
                  { data.label + '- ' }
                  <span>
                    { data.date +  ' - ' + data.location + ' '}
                  </span>

                 {data.by && <>by
                  <span>
                    { data.by }
                  </span></> }
                  .
                </div>
              )) }
            </div>
          </div>

        </div>
      </div>
    );
  }