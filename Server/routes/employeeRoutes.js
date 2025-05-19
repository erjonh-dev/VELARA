const express = require('express');
const router = express.Router();
const { getEmployees, addEmployee } = require('../controllers/employeeController');
const authenticate = require('../middleware/authMiddleware');

router.get('/', authenticate, getEmployees);

router.post('/', authenticate, addEmployee);

module.exports = router;
