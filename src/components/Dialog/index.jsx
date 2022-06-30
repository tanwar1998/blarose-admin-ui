import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const DialogContentMain = styled.div`
    width: 100%;
    float: left;
    position: relative;
    

    .close-icon{
        color: #333;
        cursor: pointer;
        position: absolute;
        top: -45px;
        z-index: 2;
        right: 0;

    }
    .heading-main{
        font-weight: 666;
        text-align: center;
        margin-bottom: 30px;
        font-size: 24px;
    }
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Alert(props) {


  return (
    <div>
      <Dialog
        open = { props.open }
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContentMain>
            <CloseIcon className='close-icon' 
                onClick = { props.handleClose }/>
            <div className='hor-row heading-main'>
                { props.label }
            </div>
            <div className='hor-row'>
                { props.children }
            </div>
        </DialogContentMain>
      </Dialog>
    </div>
  );
}
