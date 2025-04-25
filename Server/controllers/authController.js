const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Funzione di registrazione utente
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'Email già registrata' });

    // Cifra la password prima di salvarla
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // Crea e salva il nuovo utente
    user = new User({ name, email, password: hashed });
    await user.save();

    // Crea il token JWT
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Restituisce il token e i dati dell'utente
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore server' });
  }
};

// Funzione di login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Credenziali non valide' });

    // Confronta la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Credenziali non valide' });

    // Crea il token JWT
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Restituisce il token e i dati dell'utente
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, company: user.company }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore server' });
  }
};

// Funzione per ottenere i dati dell'utente (protetta da middleware di autenticazione)
exports.getUserData = async (req, res) => {
  try {
    // Usa req.user.id (popolato dal middleware di autenticazione) per ottenere i dati dell'utente
    const user = await User.findById(req.user.id).select('name email role company');

    if (!user) {
      return res.status(404).json({ msg: 'Utente non trovato' });
    }

    // Restituisci i dati dell'utente
    res.json({
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore server' });
  }
};
