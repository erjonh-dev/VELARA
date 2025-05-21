const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { getAllUsers } = require('../controllers/authController');

router.get('/', authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
