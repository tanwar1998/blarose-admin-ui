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
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];



export default function Slides(props) {
  // const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [slidesData, setSlidesData] = useState({text: '', image: []});


  const deleteItem = (data) => {
    console.log('data to delte>>>>>>>>>>>', data)
  }
  const editItem = (data) => {
    console.log('data to delte>>>>>>>>>>>', data)
  }

  const handleChange = (data, key = 'text') => {
    const tmpSlidesData = JSON.parse(JSON.stringify(slidesData));
    tmpSlidesData[key] = data;
    setSlidesData({...tmpSlidesData});
  }

  const submitData = async() => {

    if(!slidesData.text){
      window.alert('Please provide text');
      return false;
    }
    if(!slidesData.image){
      window.alert('Please provide an image');
      return false;
    }
    const uploadURL = 'upload';

    var uploadData = new FormData();
    uploadData.append('file',slidesData.image[0]);
    const header = {
        'Content-Type': 'multipart/form-data'
      }


    const uploadResponse = await props.masterAPI(uploadURL, uploadData, 'post', header);

    if(uploadResponse?.filename){
        const postAPIData = { 
          image: uploadResponse.filename,
          text: slidesData.text
        }
        const slideResponse = await props.masterAPI('home/slides', postAPIData);
        if(slideResponse.type === 'success'){
          window.alert('slide added successfully!');
          setSlidesData({text: '', image: []})
        }else{
          window.alert('Some unrecognised error, please try again!')
        }
    }else{
        console.log('errro handling')
    }

  }


    return (
      <div className='hor-row slides-container-main'>

        <div className='hor-row table-container-main'>
        <Table
            headCells = { headCells }
            rows = { rows }
            deleteItem = { deleteItem }
            editItem = { editItem }        
            title = 'Home page slides'    
        />
        </div>
          

      <Button variant="outlined" onClick={() => setOpen(true)}>
        Add Item
      </Button>

        <Alert
          open = { open }
          label = "Edit Slides Details"
          handleClose = { () => setOpen(false) }
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
        
      </div>
    );
  }