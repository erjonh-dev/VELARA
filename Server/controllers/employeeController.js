const Employee = require('../models/Employee');
const fsPromises = require('fs').promises;
const path = require('path');

exports.getEmployees = async (_req, res) => {
  try {
    const employees = await Employee.find().sort({ name: 1 });
    res.json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.getMyEmployeeData = async (req, res) => {
  try {
    const userEmail = req.user.email; 

    const employee = await Employee.findOne({ email: userEmail });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  } catch (err) {
    console.error('Error fetching employee data:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    console.error('Error adding employee:', err.message);
    res.status(400).json({ msg: 'Bad request' });
  }
};

exports.updateEmployeesJSON = async (_req, res) => {
  try {
    const employees = await Employee.find().sort({ name: 1 }).lean();

    const publicDir = path.join(__dirname, '..', 'public');
    const filePath = path.join(publicDir, 'employees.json');

    await fsPromises.mkdir(publicDir, { recursive: true });
    await fsPromises.writeFile(filePath, JSON.stringify(employees, null, 2), 'utf8');

    res.json({ message: 'employees.json aggiornato!' });
  } catch (err) {
    console.error('Error updating employees.json:', err.message);
    res.status(500).json({ error: err.message });
  }
};
