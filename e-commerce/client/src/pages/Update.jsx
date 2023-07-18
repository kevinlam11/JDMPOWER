import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [car, setCar] = useState({
    name: '',
    description: '',
    price: '',
  });
// To refresh page and nagivate to targeted page
  const navigate = useNavigate();
// To target element 
  const location = useLocation();

const carId = location.pathname.split('/')[2];
  console.log(location.pathname.split('/')[2])

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:9000/car/'+ carId, car);
      navigate('/product');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(car);
  return (
    <div className='form'>
      <h1>Update the car</h1>
      <input type='text' placeholder='name' onChange={handleChange} name='name' />
      <input type='text' placeholder='description' onChange={handleChange} name='description' />
      <input type='number' placeholder='price' onChange={handleChange} name='price' />
      <button className='formButton' onClick={handleClick}>Update Car</button>
    </div>
  );
};

export default Update;





