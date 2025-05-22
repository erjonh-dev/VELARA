const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { 
  getEmployees, 
  addEmployee, 
  updateEmployeesJSON,
  getMyEmployeeData
} = require('../controllers/employeeController');


router.get('/', authMiddleware,  getEmployees);
router.get('/me', authMiddleware, getMyEmployeeData);
router.post('/', authMiddleware, adminMiddleware, addEmployee);
router.put('/update-json', authMiddleware, adminMiddleware, updateEmployeesJSON);

module.exports = router;
