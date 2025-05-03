const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'Email già registrata' });

    
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

   
    user = new User({ name, email, password: hashed });
    await user.save();

    
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1d' });

    
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore server' });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Credenziali non valide' });

   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Credenziali non valide' });

    
    const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, { expiresIn: '1d' });

    
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, company: user.company }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Errore server' });
  }
};


exports.getUserData = async (req, res) => {
  try {
    
    const user = await User.findById(req.user.id).select('name email role company');

    if (!user) {
      return res.status(404).json({ msg: 'Utente non trovato' });
    }

  
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
