const mongoose = require('mongoose');


const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  roll_number: {
    type: Number,
    required: true,
    min: 1
  },
  section: {
    type: String,
    required: true
  },
});


const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;