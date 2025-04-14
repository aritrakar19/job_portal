const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship', 'Temporary']
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    required: true
  },
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  postedAt: {
    type: Date,
    default: Date.now
  },
  deadline: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  applyLink: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Job', jobSchema); 