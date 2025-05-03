const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Request = require('../models/Request');


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
    console.error('Errore nel POST /api/requests:', err.message);
    res.status(500).send('Errore server');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const requests = await Request.find({ user: req.user.id }).sort({ data: -1 });
    res.json(requests);
  } catch (err) {
    console.error('Errore nel GET /api/requests:', err.message);
    res.status(500).send('Errore server');
  }
});

module.exports = router;
