const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');
const { getAllUsers } = require('../controllers/userController');


router.get('/', auth, isAdmin, getAllUsers);

module.exports = router;
