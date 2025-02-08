const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  // ... other operations ...
  res.send(user);
});

//This code has a potential issue if the database operation throws an error.  The error won't be handled properly leading to the server crashing or unexpected behavior