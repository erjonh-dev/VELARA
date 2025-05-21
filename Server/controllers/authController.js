const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function signJwt(user) {
  const payload = {
    id: user._id.toString(),
    role: user.role
  };
  console.log('🚀  Signing token with payload:', payload);
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

exports.registerUser = async (req, res) => {
  const { name, email, password, role = 'user', company } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already registered' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword, role, company });
    await newUser.save();

    const token = signJwt(newUser);

    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        company: newUser.company
      }
    });
  } catch (err) {
    console.error('registerUser error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email }).select('+role +password');
    if (!user) return res.status(400).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });

    const token = signJwt(user);
    console.log('Token payload:', jwt.decode(token));

    return res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        company: user.company
      }
    });
  } catch (err) {
    console.error('loginUser error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('name email role company');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json(user);
  } catch (err) {
    console.error('getUserData error:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getAllUsers = async (_req, res) => {
  try {
    const users = await User.find().select('-password').sort({ name: 1 });
    res.json(users);
  } catch (error) {
    console.error('getAllUsers error:', error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
