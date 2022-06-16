import React from 'react';
import User1 from '../../../assets/img/about/avneet.jpg';
import User2 from '../../../assets/img/about/divya-saran.jpg';
import User3 from '../../../assets/img/about/kschatwal.jpg';
import NoFound from '../../../assets/img/no-image.jpg';

const teamData = [
    {
        name: 'Anil Ojha',
        img: '',
        email: 'anil@blarose.com',
        designation: 'CMD, Blarose Trenta',
        about: ''
    },
    {
        name: 'Avneet',
        img: User1 ,
        email: 'avneet@blarose.com',
        designation: 'Founder, Blarose Plus',
        about: `Avneet, an IIM, Udaipur alumni, comes with a decade of experience in event planning, hospitality & execution. She has handled events in India as well as abroad in countries such as Dubai, Singapore, Canada, US et al. Some of the companies she's worked with are Info Edge, Times Business Solutions Ltd and Rai University et al. However, it was her passion towards realising her dreams, that made her quit her job and start her entrepreneurial venture, Blarose.`
    },
    {
        name: 'KS Chhatwal',
        img: User3 ,
        email: '',
        designation: 'Head, Finance',
        about: `"Treasurer" as we happily call him is the head of our finance department. With a strong experience of over 30 years, Mr Chhatwal has had the privilege of serving Banks like Punjab & Sind Bank and other financial institutions, where he was spearheading the accounts department. In append, he is having a strong experience of managing the food catering business - Jasveen Caterers.`
    },
    {
        name: 'Divya Saran',
        img: User2 ,
        email: 'divya.saran@blarose.com',
        designation: 'Product & Digital Marketing Specialist',
        about: `Divya is a seasoned online product development and digital marketing specialist and has worked for companies like Info Edge, Times Business Solutions Ltd and Donzo International Support Services Inc et al, before joining Blarose. With a career span of over 10 years, Divya has enjoyed many roles, however, its social media marketing that is really close to her heart and we lovingly like to call her our "social bee- Blarose Queen Bee".`
    }
]



export default function OurTeam() {
    return (
      <div className='hor-row our-team-container-main'>
        <div className='hor-row our-team-back-image'></div>
        <div className='hor-row container-main'>
            <h2>
            "GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON.
            <br/>THEY'RE DONE BY A TEAM OF PEOPLE"
            </h2>
            <h4>
                STEVE JOBS
            </h4>

            <div className='hor-row heading-text'>
                We truly believe in the power of teamwork and our team members are our greatest asset!!! We come from diverse set of experiences and background but we all share the same spirits and values!!! Our team is comprised of highly passionate people having specialised skills to design any special event in one's life or organisation into a beautiful celebration. Consider us as an extension to your team and family and get to know your Blarose team below:
            </div>
            <div className='hor-row underline-row'>
                <span></span>
            </div>

            <div className='hor-row team-card-container'>
                {
                    teamData.map((data, index)=>(
                        <div className='hor-row card-container'>
                            <img src = {data.img ? data.img : NoFound } />
                            <div className='hor-row member-name'>
                                { data.name } 
                            </div>
                            <i className='hor-row member-designation'>
                                { data.designation } 
                            </i>
                            <a href={"mailto:" + data.email }>
                                <i>{ data.email } </i>
                            </a>
                            <div className='hor-row member-about'>
                                { data.about } 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    )
}