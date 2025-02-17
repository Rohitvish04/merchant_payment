//  const app = require('./app');
// const db = require('./config/db');
// const PORT = process.env.PORT || 5000;

// // Sync Sequelize models with the database
// db.sync({ force: false }) // `force: true` will drop the table if it already exists
//   .then(() => {
//     console.log('Database synced');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error('Error syncing database:', err));

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
 

// Database Connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payments', paymentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));