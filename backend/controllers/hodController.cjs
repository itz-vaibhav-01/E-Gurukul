const bcrypt = require("bcryptjs");
const Student = require('../models/student.cjs');
const Faculty = require('../models/Faculty.cjs');

// ===========================
// HOD Face Verification
// ===========================
const verifyHODFace = async (req, res) => {
  try {
    const { isVerified } = req.body;

    if (!isVerified) {
      return res.status(401).json({ message: 'Face Verification Failed' });
    }

    res.status(200).json({ message: 'Face Verified Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ===========================
// Add Faculty
// ===========================
const addFaculty = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingFaculty = await Faculty.findOne({ email });
    if (existingFaculty) {
      return res.status(400).json({ message: "Faculty Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFaculty = new Faculty({
      name,
      email,
      password: hashedPassword,
    });

    await newFaculty.save();

    res.status(201).json({ message: "Faculty Added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ===========================
// Delete Faculty
// ===========================
const deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    res.status(200).json({ message: "Faculty deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ===========================
// Get All Students
// ===========================
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, students });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ===========================
// Get Single Student By ID
// ===========================
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student Not Found' });
    }
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ===========================
// Get All Faculties
// ===========================
const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json({ success: true, faculties });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ===========================
// Get Single Faculty By ID
// ===========================
const getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty Not Found' });
    }
    res.status(200).json({ success: true, faculty });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

// ===========================
// Export All Functions
// ===========================
module.exports = {
  verifyHODFace,
  addFaculty,
  deleteFaculty,
  getAllStudents,
  getStudentById,
  getAllFaculties,
  getFacultyById
};
