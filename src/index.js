const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Practice Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Study Express Middleware', completed: false, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'Deploy Project', completed: false, priority: 'medium', createdAt: new Date() }
];

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running for second time!');
});

// Tasks route
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()  // seconds since the server started
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
