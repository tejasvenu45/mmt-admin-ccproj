const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  rooms: Number,
  managerContact: String,
  pricePerNight: Number,
  description: String,
});

const Hotel = mongoose.model('Hotel', HotelSchema);


app.post('/hotels', async (req, res) => res.json(await Hotel.create(req.body)));
app.get('/hotels', async (req, res) => res.json(await Hotel.find()));
app.put('/hotels/:id', async (req, res) =>
  res.json(await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);
app.delete('/hotels/:id', async (req, res) =>
  res.json(await Hotel.findByIdAndDelete(req.params.id))
);

app.listen(3002, () => console.log('Hotels API on port 3002'));
