// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Optional: enable JSON parsing for POST requests
// app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'App is running' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
