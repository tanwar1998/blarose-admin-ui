import React from 'react';
import Logo from '../../assets/img/logo.gif';
import { NavigationBarContainer, NavigationBarContent } from './style.js';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {  Link } from "react-router-dom";

const navItem = [
    {
        key: 'HOME',
        link: ' '
    },
    {
        key: 'SERVICES',
        link: 'services'
    },
    {
        key: 'ABOUT US',
        subItem: [
            {
                label: 'About Us',
                link: 'about-us'
            },
            {
                label: 'Our Team',
                link: 'our-team'
            },
            {
                label: 'Contact Us',
                link: 'contact-us'
            },
        ]
    },
    {
        key: 'CLIENT',
        link: 'client'
    },
    {
        key: 'GALLERY',
        link: 'gallery'
    }
]

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });



export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    const NavItemList = () =>(
        navItem.map((item) => (
            <div className={'nav-item' +  (item.subItem?.length ? ' subitem-container-nav' : '')} >
                { item.link ? (<Link to={"/" + item.link}>{ item.key } </Link>) : item.key}

                {item.subItem && <div className='nav-hover-content'>
                    <div className='hor-row'>
                        <div className='pointer-icon'/>
                    </div>

                    {
                        item.subItem.map((subItem, i)=>(
                            <div className='hor-row nav-label'
                                style={{borderBottom: `${i !== (item.subItem.length -1) ? '1px solid #fff' : ''}`}}>
                                    <Link to={"/" + subItem.link}>{ subItem.label } </Link>
                            </div>
                        ))
                    }
                </div>}
            </div>
        ))
    )

    const navContentMain = (isMobile) => (
        <NavigationBarContent>
            { (isMobile && open) && <CloseIcon className='close-icon'  onClick  = { () => setOpen(false) }/>}
            <div className='hor-row nav-content-main'
                style={{gridTemplateColumns: isMobile ? 'auto': 'auto auto'}}>
                <div className='hor-row logo-container'>
                    <img src={Logo} alt = 'logo' style={{marginBottom: isMobile? '40px' : '' }} />
                </div>
                {!isMobile && <div className='hor-row nav-item-container'>
                    <div className='hor-row desktop-block'>
                        <NavItemList/>
                    </div>

                    <div className='hor-row mobile-block'>
                        <div className='nav-item'>
                            <MenuIcon className='menu-button'
                                onClick  = { () => setOpen(true) }
                            />
                        </div>
                    </div>
                    
                </div>}
                {isMobile &&<div className= 'hor-row mobile-block'>
                    <div className='hor-row nav-item-container'>
                        {open ? (
                        <NavItemList/>
                        )
                        : (<div className='nav-item'>
                            <MenuIcon className='menu-button'
                                onClick  = { () => setOpen(true) }
                            />
                        </div>)}
                    </div>
                </div>}
            </div>
        </NavigationBarContent>
    )

    return (
      <NavigationBarContainer>
          { navContentMain() }
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={ () => setOpen(false)}
            aria-describedby="alert-dialog-slide-description"
            >
            
            { navContentMain(true) }
        </Dialog>
      </NavigationBarContainer>
    );
  }