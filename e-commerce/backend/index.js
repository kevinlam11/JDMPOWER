import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'JDMPOWER'
});

// MIDDLEWARE
app.use(express.json());
const cors = require('cors');
app.use(cors({ origin: '*'}

));

// GET
app.get('/', (req, res) => {
  res.json('hello this is backend');
});

app.get('/car', (req, res) => {
  const q = 'SELECT * FROM car';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// CREATE
app.post('/car', (req, res) => {
  const q = 'INSERT INTO car (`name`, `description`, `price`, `img`) VALUES (?)';
  const values = [
    req.body.name,
    req.body.description,
    req.body.price,
    req.body.img
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Car has been created successfully');
  });
});
// DELETE
app.delete('/car/:id', (req, res) => {
  const carId = req.params.id;
  const q = 'DELETE FROM car WHERE id=?';

  db.query(q, [carId], (err, data) => {
    if (err) return res.json(err);
    return res.json('Car has been deleted successfully');
  });
  
});
// UPDATE
app.put('/car/:id', (req, res) => {
  const carId = req.params.id;
  const q =
    'UPDATE car SET `name` = ?, `description` = ?, `img` = ?, `price` = ? WHERE id = ?'; 

  const values = [
    req.body.name,
    req.body.description,
    req.body.img,
    req.body.price
  ];

  db.query(q, [...values, carId], (err, data) => {
    if (err) return res.json(err);
    return res.json('Car has been updated successfully');
  });
});

app.listen(9000, () => {
  console.log('!!! DO NOT TOUCH ANYTHING OR IT WILL BREAK !!!');
});


