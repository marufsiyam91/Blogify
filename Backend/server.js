const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend for blogify initialized')
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Connection problem:', error.message);
    console.error('Stack trace:', error.stack);
  });

