const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to ProveIAM API',
    version: '1.0.0',
    status: 'running'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ProveIAM server running on port ${PORT}`);
});