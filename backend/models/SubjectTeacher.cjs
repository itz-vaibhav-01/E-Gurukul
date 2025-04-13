// models/SubjectTeacher.js
const mongoose = require('mongoose');

const subjectTeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('SubjectTeacher', subjectTeacherSchema);
