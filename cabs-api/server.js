const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const CabSchema = new mongoose.Schema({
  pickup: String,
  drop: String,
  carName: String,
  date: Date,
});

const Cab = mongoose.model('Cab', CabSchema);

// CRUD
app.post('/cabs', async (req, res) => res.json(await Cab.create(req.body)));
app.get('/cabs', async (req, res) => res.json(await Cab.find()));
app.put('/cabs/:id', async (req, res) =>
  res.json(await Cab.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);
app.delete('/cabs/:id', async (req, res) =>
  res.json(await Cab.findByIdAndDelete(req.params.id))
);

app.listen(3003, () => console.log('Cabs API on port 3003'));
