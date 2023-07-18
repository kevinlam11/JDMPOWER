import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [car, setCar] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9000/car', car);
      navigate('/product');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form'>
      <h1>Add new car</h1>
      <input type='text' placeholder='name' onChange={handleChange} name='name' />
      <input type='text' placeholder='desc' onChange={handleChange} name='description' />
      <input type='text' placeholder='image' onChange={handleChange} name='image' />
      <input type='number' placeholder='price' onChange={handleChange} name='price' />

      {car.image && (
        <img src={`/images/${car.image}`} alt='car' style={{ width: '200px', height: 'auto' }} />
      )}

      <button className='formButton' onClick={handleClick}>
        Add Car
      </button>
    </div>
  );
};

export default Add;


