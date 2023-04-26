const express = require('express');
const app = express();
const port = 3001;

const data = require('./data.json');

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});