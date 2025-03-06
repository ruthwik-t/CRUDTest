const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET request
app.get('/get', (req, res) => {
  res.json('GET request received');
});

// POST request
app.post('/post', (req, res) => {
  res.json('POST request received');
});

// PUT request
app.put('/put', (req, res) => {
  res.json('PUT request received');
});

// DELETE request
app.delete('/delete', (req, res) => {
  res.json('DELETE request received');
});

app.listen(PORT, () => {
  console.log(`Server running`);
});