const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Practice Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Study Express Middleware', completed: false, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'Deploy Project', completed: false, priority: 'medium', createdAt: new Date() }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET a task by ID (with validation)
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  // Check if ID is a valid positive number
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
