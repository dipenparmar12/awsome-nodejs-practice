const mongoose = require('mongoose');
// test = _id, name,

const testSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model('Test', testSchema);
