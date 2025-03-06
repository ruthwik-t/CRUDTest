const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET request
app.get('/get', (req, res) => {
  res.send('GET request received');
});

// POST request
app.post('/post', (req, res) => {
  res.send('POST request received');
});

// PUT request
app.put('/put', (req, res) => {
  res.send('PUT request received');
});

// DELETE request
app.delete('/delete', (req, res) => {
  res.send('DELETE request received');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});