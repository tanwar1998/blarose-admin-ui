import React, { useState, useEffect } from 'react';
// import InputComponent from '../../../components/InputComponent/index.jsx';
import Table from '../../../components/Table/index.jsx';

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



export default function Home(props) {
  // const [email, setEmail] = useState('');

  const deleteItem = (data) => {
    console.log('data to delte>>>>>>>>>>>', data)
  }
  const editItem = (data) => {
    console.log('data to delte>>>>>>>>>>>', data)
  }


    return (
      <div className='hor-row home-container-main'>
        <div className='hor-row container-main'>
          <h2>
            Home page 
          </h2>

          <div className='hor-row tabs-container-main'>
            <span className='tab-item selected-tab'>
              Slides
            </span>
            <span className='tab-item'>
              Services
            </span>
            <span className='tab-item'>
              Success stories
            </span>
            <span className='tab-item'>
              Premier Properties
            </span>
            <span className='tab-item'>
              Experience
            </span>
          </div>

          <div className='hor-row table-container-main'>
            <Table
              headCells = { headCells }
              rows = { rows }
              deleteItem = { deleteItem }
              editItem = { editItem }            
            />
          </div>
          
        </div>
        
      </div>
    );
  }