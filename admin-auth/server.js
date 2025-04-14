const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const AdminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const Admin = mongoose.model('Admin', AdminSchema);

app.post('/register', async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const admin = new Admin({ email: req.body.email, password: hashedPassword });
  await admin.save();
  res.json({ message: 'Admin registered' });
});

app.post('/login', async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin || !(await bcrypt.compare(req.body.password, admin.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: admin._id }, 'secret');
  res.json({ token });
});

app.listen(3001, () => console.log('Admin auth running on port 3001'));
