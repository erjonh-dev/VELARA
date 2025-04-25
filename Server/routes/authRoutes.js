const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Assicurati di avere il modello User configurato
const router = express.Router();

// Middleware di autenticazione
const authMiddleware = require('../middleware/authMiddleware');  // Aggiungi il middleware di autenticazione

// Registrazione
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Tutti i campi sono obbligatori.' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'Utente già registrato' });

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
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(400).json({ msg: 'Tutti i campi sono obbligatori.' });
  }

  try {
    // Cerca l'utente per email o username
    const user = await User.findOne({
      $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
    });

    if (!user) return res.status(400).json({ msg: 'Utente non trovato' });

    // Verifica la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Password errata' });

    // Crea il token JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Risposta con token + dati utente
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore nel server' });
  }
});

// Rotta protetta per ottenere i dati dell'utente autenticato
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('name email role company'); // Recupera solo i dati necessari

    if (!user) return res.status(404).json({ msg: 'Utente non trovato' });

    res.json({
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore nel server' });
  }
});

module.exports = router;
