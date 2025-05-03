const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  descrizione: {
    type: String
  },
  data: {
    type: Date,
    default: Date.now
  },
  stato: {
    type: String,
    default: 'in attesa' 
  }
});

module.exports = mongoose.model('Request', RequestSchema);
