const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');  
const router = express.Router();


const authMiddleware = require('../middleware/authMiddleware');  


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


router.post('/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(400).json({ msg: 'Tutti i campi sono obbligatori.' });
  }

  try {
    
    const user = await User.findOne({
      $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
    });

    if (!user) return res.status(400).json({ msg: 'Utente non trovato' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Password errata' });

    
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    
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


router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('name email role company'); 

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
