import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = () => {
  const [car, setCar] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchAllCar = async () => {
      try {
        const res = await axios.get('https://magical-llama-6e690a.netlify.app');
        setCar(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCar();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/car/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='bg2'>
      <section className='inventory'>
      <h1 className="white">CURRENT INVENTORY</h1>
      <input
        type="text"
        placeholder='Search For Car...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='white'>
          {car
            .filter((car) => car.name.toLowerCase().includes(query.toLowerCase()))
            .map((car) => (
              <li key={car.id}>{car.name}</li>
            ))}
        </ul>
        </section>
      <h1 className="white">CARS</h1>
      <div className="car">
        {car.map((car) => (
          <div className="car" key={car.id}>
            <h2 className='white'>{car.name}</h2>
            <img className="carimg" src={`images/${car.img}`} alt="car" />
            <p>{car.description}</p>
            <button className="update">
              <Link to={`/update/${car.id}`}>Update</Link>
            </button>
            <span className='white'>{car.price}</span>
            <button className="delete" onClick={() => handleDelete(car.id)}>
              Delete
            </button>
          </div>
        ))}
        <button id="newCar">
          <Link to="/add">Add new car</Link>
        </button>
      </div>
    </div>
  );
};

export default Car;

