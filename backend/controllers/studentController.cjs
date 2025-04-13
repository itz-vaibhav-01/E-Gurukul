const Attendance = require('../models/Attendance.cjs');
const Marks = require('../models/Marks.cjs');
const Notification = require('../models/Notification.cjs');
const Student = require('../models/student.cjs');

// ===========================
// Get Attendance for a Student
// ===========================
const getAttendance = async (req, res) => {
  try {
    const studentId = req.user.id;
    const attendance = await Attendance.find({ studentId }).populate('facultyId');
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get Marks for a Student
// ===========================
const getMarks = async (req, res) => {
  try {
    const studentId = req.user.id;
    const marks = await Marks.find({ studentId }).populate('facultyId');
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get Notifications for a Student
// ===========================
const getNotifications = async (req, res) => {
  try {
    const studentId = req.user.id;
    const notifications = await Notification.find({ studentId });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Get Student Data (Dashboard Info)
// ===========================
const getStudentData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Student Data fetched successfully'
  });
};

// ===========================
// Get All Students (Faculty View)
// ===========================
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
      message: 'Students fetched successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// Export controller functions
module.exports = {
  getAttendance,
  getMarks,
  getNotifications,
  getStudentData,
  getStudents,
};
