const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// In-memory storage for todos
let todos = [];

// API Routes

// Get all todos
app.get('/api/todos', (req, res) => {
  const { filter } = req.query;
  let result = todos;

  if (filter === 'active') {
    result = todos.filter(t => !t.completed);
  } else if (filter === 'completed') {
    result = todos.filter(t => t.completed);
  }

  // Sort by created_at DESC
  result = result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  res.json(result);
});

// Create a todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Text is required' });
  }

  const todo = {
    id: uuidv4(),
    text: text.trim(),
    completed: false,
    created_at: new Date().toISOString()
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// Toggle todo completion
app.patch('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.completed = completed;
  res.json({ id, completed });
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.status(204).send();
});

// Clear completed todos
app.delete('/api/todos', (req, res) => {
  const initialCount = todos.length;
  todos = todos.filter(t => !t.completed);
  const deleted = initialCount - todos.length;

  res.json({ deleted });
});

// Serve frontend for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
