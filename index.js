require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');

const app = express();
const port = 3010;


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
