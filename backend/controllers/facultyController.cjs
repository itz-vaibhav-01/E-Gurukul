const bcrypt = require('bcryptjs');
const Attendance = require('../models/Attendance.cjs');
const Marks = require('../models/Marks.cjs');
const Notification = require('../models/Notification.cjs');
const Student = require('../models/student.cjs');
const SubjectTeacher = require('../models/SubjectTeacher.cjs');

// ===========================
// Get Faculty Data (Dashboard Info)
// ===========================
const getFacultyData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Faculty Data fetched successfully'
  });
};

// ===========================
// Get Attendance for Faculty
// ===========================
const getAttendance = async (req, res) => {
  try {
    const facultyId = req.user.id;
    const attendance = await Attendance.find({ facultyId }).populate('studentId');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get Marks for Faculty
// ===========================
const getMarks = async (req, res) => {
  try {
    const facultyId = req.user.id;
    const marks = await Marks.find({ facultyId }).populate('studentId');
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get Notifications for Faculty
// ===========================
const getNotifications = async (req, res) => {
  try {
    const facultyId = req.user.id;
    const notifications = await Notification.find({ facultyId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get All Students
// ===========================
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
      message: 'Students fetched successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// ===========================
// Upload Marks
// ===========================
const uploadMarks = async (req, res) => {
  try {
    const { studentId, subject, marks } = req.body;

    const newMarks = new Marks({
      studentId,
      subject,
      marks,
    });

    await newMarks.save();

    res.status(201).json({
      success: true,
      message: 'Marks uploaded successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading marks', error });
  }
};

// ===========================
// Upload Attendance
// ===========================
const uploadAttendance = async (req, res) => {
  try {
    const { studentId, subject, date, status } = req.body;

    const newAttendance = new Attendance({
      studentId,
      subject,
      date,
      status,
    });

    await newAttendance.save();

    res.status(201).json({
      success: true,
      message: 'Attendance uploaded successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading attendance', error });
  }
};

// ===========================
// Admit New Student
// ===========================
const admitStudent = async (req, res) => {
  try {
    const { name, email, rollNo, department } = req.body;

    const newStudent = new Student({
      name,
      email,
      rollNo,
      department,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: 'Student admitted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: 'Error admitting student', error });
  }
};

// ===========================
// Delete Marks
// ===========================
const deleteMarks = async (req, res) => {
  try {
    const marksId = req.params.id;

    const deletedMarks = await Marks.findByIdAndDelete(marksId);

    if (!deletedMarks) {
      return res.status(404).json({ message: 'Marks not found' });
    }

    res.status(200).json({ message: 'Marks Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting marks', error });
  }
};

// ===========================
// Add Subject Teacher
// ===========================
const addSubjectTeacher = async (req, res) => {
  try {
    const { name, subject, email } = req.body;

    const newTeacher = new SubjectTeacher({
      name,
      subject,
      email,
    });

    await newTeacher.save();

    res.status(201).json({ message: 'Subject Teacher Added Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding subject teacher', error });
  }
};

// ===========================
// Get All Students (For Faculty)
// ===========================
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Final export (✅ everything consistently defined above)
module.exports = {
  getFacultyData,
  getStudents,
  uploadMarks,
  uploadAttendance,
  admitStudent,
  deleteMarks,
  addSubjectTeacher,
  getAllStudents,
  getAttendance,
  getMarks,
  getNotifications
};
