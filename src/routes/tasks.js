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

// GET task by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
