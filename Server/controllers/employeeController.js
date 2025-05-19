const Employee = require('../models/Employee');


exports.getEmployees = async (_req, res) => {
  try {
    const employees = await Employee.find().sort({ name: 1 });
    res.json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err.message);
    res.status(500).json({ msg: 'Server error' });
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
