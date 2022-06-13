import React from 'react';
import Logo from '../../assets/img/logo.gif';
import { NavigationBarContainer, NavigationBarContent } from './style.js';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItem = [
    {
        key: 'HOME'
    },
    {
        key: 'SERVICES'
    },
    {
        key: 'ABOUT US'
    },
    {
        key: 'CONTACT US'
    },
    {
        key: 'GALLERY'
    }
]

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });



export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    const navContentMain = (isMobile) => (
        <NavigationBarContent>
            { (isMobile && open) && <CloseIcon className='close-icon'  onClick  = { () => setOpen(false) }/>}
            <div className='hor-row nav-content-main'
                style={{gridTemplateColumns: isMobile ? 'auto': 'auto auto'}}>
                <div className='hor-row logo-container'>
                    <img src={Logo} alt = 'logo' 
                        onClick  = { () => setOpen(true) } />
                </div>
                { <div className='hor-row  desktop-block'>
                    <div className='hor-row nav-item-container'>
                        {navItem.map((item) => (
                                <div className='nav-item'>
                                    { item.key }
                                </div>
                        )) }
                    </div>
                </div>}
                {<div className= 'hor-row mobile-block'>
                    <div className='hor-row nav-item-container'>
                        {open ? (
                            navItem.map((item) => (
                                <div className='nav-item'>
                                    { item.key }
                                </div>
                        )) 
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