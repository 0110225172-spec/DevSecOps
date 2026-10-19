const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./auth');
const { sanitizeInput } = require('./utils');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const authResult = authenticateToken(username, password);

  if (authResult.success) {
    return res.status(200).json({ message: 'Login successful', token: authResult.token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

router.get('/data', (req, res) => {
  const input = req.query.q || '';
  const cleanInput = sanitizeInput(input);
  res.status(200).json({ result: `Query processed: ${cleanInput}` });
});

module.exports = router;