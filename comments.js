// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON data
app.use(bodyParser.json());

// Store comments in memory
const comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  const { text } = req.body;
  const comment = { text };
  comments.push(comment);
  res.status(201).send(comment);
});

// Get all comments
app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

// Start the server
const port = 4001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});