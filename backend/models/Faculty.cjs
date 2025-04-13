const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],  // Email validation
  },
  password: {
    type: String,
    required: true,
  },
  department: {  // Optional: Add faculty department
    type: String,
    required: true,
  },
  contactNumber: {  // Optional: Add contact number
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Faculty", facultySchema);
