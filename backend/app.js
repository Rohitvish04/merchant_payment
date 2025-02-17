const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors());

// Middleware
// app.use(cors());
app.use(express.json());

// Database Connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app;