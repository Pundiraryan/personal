import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import  { useState, useEffect } from 'react';
import axios from 'axios';
const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];


export default function DiscreteSliderValues() {
    const [counts, setCounts] = useState({
        food: 0,
        finance: 0,
        water: 0
      });
      const [foodscale, setFoodscale] = useState(0)
      const [fooddesc, setFooddesc] = useState('')
      const [waterscale, setwaterscale] = useState(0)
      const [waterdesc, setwaterdesc] = useState('')
      const [financescale, setfinancescale] = useState(0)
      const [financedesc, setfinancedesc] = useState('')
      const handleCountChange = (category, count) => {
        axios.post('http://localhost:4000/api/update-count', {
          category,
          count
        })
          .then(res => {
            setCounts({
              ...counts,
              [category]: count
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
      const submitfood=()=>{
        console.log(foodscale);
        console.log(fooddesc);
        axios.post('/api/submitfood', { food: foodscale, fooddesc: fooddesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      const submitwater=()=>{
        console.log(waterscale);
        console.log(waterdesc);
        axios.post('/api/submitwater', { water: waterscale, waterdesc: waterdesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      const submitfinance=()=>{
        console.log(financescale);
        console.log(financedesc);
        axios.post('/api/submitfinance', { finance: financescale, financedesc: financedesc })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
        
      }
      function valuetextfood(value) {
        setFoodscale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatfood(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }

    function valuetextwater(value) {
        setwaterscale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatwater(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }

    function valuetextfinance(value) {
        setfinancescale(value)
      return `${value}°C`;
    }
    
    function valueLabelFormatfinance(value) {
        
      return marks.findIndex((mark) => mark.value === value) + 1;
    }
    
    useEffect(() => {
        axios.get('http://localhost:4000/api/problem-counts')
          .then(res => {
            setCounts(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, []);
  return (
    <>

<div>
<div>
      <h2>Problem of Hostel : govind</h2>
      <div>
        <label htmlFor="food">Food:</label>
        <br />
        <textarea name="fooddescription" rows="4" cols="50" value={fooddesc} onChange={(e) => setFooddesc(e.target.value)}/>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatfood}
        getAriaValueText={valuetextfood}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    <button onClick={submitfood}>Submit Your Problem</button>
    </div>
      </div>



      <div>
     
      <div>
        <label htmlFor="food">Water:</label>
        <br />
        <textarea name="waterdescription" rows="4" cols="50" value={waterdesc} onChange={(e) => setwaterdesc(e.target.value)}/>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatwater}
        getAriaValueText={valuetextwater}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    <button onClick={submitwater}>Submit Your Problem</button>
    </div>
      </div>





      <div>
     
      <div>
        <label htmlFor="food">finance:</label>
        <br />
        <textarea name="financedescription" rows="4" cols="50" value={financedesc} onChange={(e) => setfinancedesc(e.target.value)}/>
        <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormatfinance}
        getAriaValueText={valuetextfinance}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    <button onClick={submitfinance}>Submit Your Problem</button>
    </div>
      </div>


    
      
    </div>

    
    </>
  );
}
