const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name:            { type: String, required: true },
  role:            { type: String, required: true },
  status:          { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  startOfContract: { type: Date  },
  endOfContract:   { type: Date  },
  contractType:    { type: String, enum: ['Employee', 'Administrator'], default: 'Employee' }
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
