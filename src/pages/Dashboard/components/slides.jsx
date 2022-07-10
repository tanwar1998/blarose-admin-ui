import React, { useState } from 'react';
import InputComponent from '../../../components/InputComponent/index.jsx';
import Table from '../../../components/Table/index.jsx';
import Button from '@mui/material/Button';
import Alert from '../../../components/Dialog/index.jsx';
import DragAndDrop from '../../../components/DragAndDrop/index.jsx';
import ButtonComponent from '../../../components/ButtonComponent/index.jsx';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0),
];


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
  // const [email, setEmail] = useState('');
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [slidesData, setSlidesData] = useState({text: '', image: []});


  const deleteItem = (data) => {
    setOpenConfirmationDialog(true)
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
      window.alert('Please provide text');
      return false;
    }
    if((alertData.type !== 'edit' && (!slidesData.image.length))){
      window.alert('Please provide an image');
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
      window.alert('Someunrecognised error while uploading image');
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
          window.alert('slide added successfully!');
          if(alertData.type !== 'edit'){
            setSlidesData({text: '', image: []})
          }
          
        }else{
          window.alert('Some unrecognised error, please try again!')
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
          open = { openConfirmationDialog }
          label = "Do You want to proceed"
          type = 'confirm'

          onCancel = { () => setOpenConfirmationDialog(false) }
          onConfirm = { () => setOpenConfirmationDialog(false) }
          handleClose = { () => setOpenConfirmationDialog(false) }
        />
      </div>
    );
  }