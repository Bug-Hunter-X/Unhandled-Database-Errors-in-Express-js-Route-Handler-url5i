const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ...database operation to fetch user...
    if (!user) {
      return res.status(404).send('User not found');
    }
    // ... other operations ...
    res.send(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
});
//Using async/await makes error handling cleaner, and a try/catch block handles exceptions, preventing crashes