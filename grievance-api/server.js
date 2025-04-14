const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const GrievanceSchema = new mongoose.Schema({
  message: String,
  userEmail: String,
  response: { type: String, default: '' },
});

const Grievance = mongoose.model('Grievance', GrievanceSchema);

// View all
app.get('/grievances', async (req, res) => res.json(await Grievance.find()));

// Respond
app.post('/grievances/:id/respond', async (req, res) => {
  const { response } = req.body;
  const updated = await Grievance.findByIdAndUpdate(
    req.params.id,
    { response },
    { new: true }
  );
  res.json(updated);
});

// Add a grievance (User)
app.post('/grievances', async (req, res) => {
  const { message, userEmail } = req.body;
  if (!message || !userEmail) {
    return res.status(400).json({ error: 'message and userEmail are required' });
  }
  const grievance = new Grievance({ message, userEmail });
  await grievance.save();
  res.status(201).json(grievance);
});


app.listen(3004, () => console.log('Grievance API on port 3004'));
