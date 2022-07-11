import React, { useState } from 'react';
import InputComponent from '../../../components/InputComponent/index.jsx';
import Table from '../../../components/Table/index.jsx';
import Button from '@mui/material/Button';
import Alert from '../../../components/Dialog/index.jsx';
import DragAndDrop from '../../../components/DragAndDrop/index.jsx';
import ButtonComponent from '../../../components/ButtonComponent/index.jsx';
import { Toastify } from '../../../components/Toastify/index.jsx';


const headCells = [
  // {
  //   id: 'name',
  //   numeric: false,
  //   disablePadding: true,
  //   label: 'Dessert (100g serving)',
  // },
  // {
  //   id: 'calories',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Calories',
  // },
  // {
  //   id: 'fat',
  //   numeric: true,
  //   disablePadding: false,
  //   label: 'Fat (g)',
  // },
  {
    id: 'text',
    numeric: true,
    disablePadding: false,
    label: 'Text',
  },
  {
    id: 'image',
    type: 'image',
    label: 'Image',
  },
];



export default function Slides(props) {
  const [alertData, setAlertData] = useState({});
  const [deleteData, setDeleteData] = useState({id: '', open: false});
  const [slidesData, setSlidesData] = useState({text: '', image: []});


  const deleteItem = (data) => {
    setDeleteData({id: data[0]?.id,   open: true});
  }

  const handleDeleteDataCancel = () => {
    setDeleteData({open: false})
  }

  const handleDeleteDataConfirm = async() => {
    const URL = 'home/slides/' + deleteData.id;
    const slideResponse = await props.masterAPI(URL, {}, 'delete');
    if(slideResponse?.type === 'success'){
        Toastify('success', "slide deleted successfully!")
        setDeleteData({open: false});
        props.getSlidesData(props.store, true);
    }else{
      Toastify('error', "Some unrecognised error, please try again")
    }
  }

  const editItem = (data) => {
    const tmpEditData = { text: data[0].text, id: data[0].id, tmpImage: data[0].image  }
    setSlidesData({...tmpEditData});
    const tmpAlertData = {
      open: true,
      type: 'edit',
      label: 'Edit Slide Item'
    }
    setAlertData(tmpAlertData)
  }

  const handleChange = (data, key = 'text') => {
    const tmpSlidesData = JSON.parse(JSON.stringify(slidesData));
    tmpSlidesData[key] = data;
    setSlidesData({...tmpSlidesData});
  }

  const handleEditBoxClose = ()=> {
    setSlidesData({text: '', image: []});
    setAlertData({open: false})
    setAlertData({})
 }
  const submitData = async() => {
    if(!slidesData.text){
      Toastify('error', "Please provide text!")
      return false;
    }
    if((alertData.type !== 'edit' && (!slidesData.image.length))){
      Toastify('error', "Please provide an image!")
      return false;
    }
    const uploadURL = 'upload';
    let uploadResponse = '';
    let checkIfFileUploaded = (alertData.type !== 'edit' || (alertData.type === 'edit' && slidesData.image?.length)) ;
    if(checkIfFileUploaded){ 
      let uploadData = new FormData();
      uploadData.append('file',slidesData.image[0]);
      const header = {
          'Content-Type': 'multipart/form-data'
        }
      uploadResponse = await props.masterAPI(uploadURL, uploadData, 'post', header);
    }

    if(uploadResponse && !uploadResponse){
      Toastify('error', "Some unrecognised error while uploading image!")
      return false;
    }

        const postAPIData = { 
          image: uploadResponse?.filename ? uploadResponse.filename: slidesData.tmpImage ,
          text: slidesData.text,
        }

        const URL = alertData.type === 'edit' ?  ('home/slides/' + slidesData.id + '/') : 'home/slides';
        const method = alertData.type === 'edit' ? 'put' : 'post';
        const slideResponse = await props.masterAPI(URL, postAPIData, method);
        if(slideResponse?.type === 'success'){
          Toastify('success', "slide added successfully")
          if(alertData.type !== 'edit'){
            setSlidesData({text: '', image: []})
          }
        }else{
          Toastify('error', "ome unrecognised error, please try again!")
        }
  }


    return (
      <div className='hor-row slides-container-main'>

        <div className='hor-row table-container-main'>
        <Table
            headCells = { headCells }
            rows = { props.store?.cacheData?.data?.slidesData.data || [] }
            deleteItem = { deleteItem }
            editItem = { editItem }        
            title = 'Home page slides'    
        />
        </div>
          

      <Button variant="outlined" onClick={() => setAlertData({open: true})}>
        Add Item
      </Button>

        <Alert
          open = { alertData.open }
          label = {alertData.label || "Add Slides"}
          handleClose = { handleEditBoxClose }
        >

          <div className='hor-row panel-row'>
            <InputComponent
              placeholder = 'Slider Text'
              label = 'Slider Text'
              value  = {slidesData.text || ''}
              onChange = { handleChange }
              />
          </div>

          <DragAndDrop
              onChange = {(data) => handleChange(data, 'image') }
              files = {  slidesData.image  }
            />
          <div className='hor-row panel-row'>
            <ButtonComponent
              label = 'Save'
              onClick = { submitData }
              />
          </div>

        </Alert>
        
        <Alert
          open = { deleteData.open }
          label = "Do You want to proceed"
          type = 'confirm'
          handleConfirm = { handleDeleteDataConfirm }
          handleClose = { handleDeleteDataCancel }
        />
      </div>
    );
  }