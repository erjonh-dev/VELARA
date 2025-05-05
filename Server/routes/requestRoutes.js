const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Request = require('../models/Request');

// Create a new request
router.post('/', auth, async (req, res) => {
  const { tipo, descrizione } = req.body;

  try {
    const newRequest = new Request({
      user: req.user.id, 
      tipo,
      descrizione
    });

    const saved = await newRequest.save();
    res.json(saved);
  } catch (err) {
    console.error('Error in POST /api/requests:', err.message);
    res.status(500).send('Server error');
  }
});

// Get all requests for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id }).sort({ data: -1 });
    res.json(requests);
  } catch (err) {
    console.error('Error in GET /api/requests:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
