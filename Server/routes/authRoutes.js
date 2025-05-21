const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');  // <-- destrutturato
const {
  registerUser,
  loginUser,
  getUserData
} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', authMiddleware, getUserData);

module.exports = router;
