// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Set up a basic route that listens on '/' (root)
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my app on localhost:1000!');
});

// Define the port number (1000 in this case)
const port = 1000;

// Start the server and listen on port 1000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
