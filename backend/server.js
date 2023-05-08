const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

const data = require('./src/data.json');

app.get('/', cors(), (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});