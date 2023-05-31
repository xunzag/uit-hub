const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
