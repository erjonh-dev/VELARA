const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assicurati di avere il modello User configurato
const router = express.Router();

// Registrazione
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verifica se l'utente esiste già
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'Utente già registrato' });

    // Crea un nuovo utente
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ msg: 'Utente registrato con successo' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore nel server' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica se l'utente esiste
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Utente non trovato' });

    // Verifica la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Password errata' });

    // Crea il token JWT
    const payload = {
      user: {
        id: user.id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore nel server' });
  }
});

module.exports = router;
