const express = require('express');
const app = express();
const port = 3000;

// Import Tasks Router
const taskRoutes = require('./routes/tasks');

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running with Express Router!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Mount tasks router
app.use('/tasks', taskRoutes);  // /tasks & /tasks/:id

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
