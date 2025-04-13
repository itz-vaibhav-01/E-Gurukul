// backend/routes/facultyRoutes.js

const express = require('express');
const router = express.Router();

// Middleware
const { protect, authorizeRoles } = require('../middleware/authMiddleware.cjs');

// Controller functions
const {
  getFacultyData,
  getStudents,
  uploadMarks,
  uploadAttendance,
  admitStudent,
  deleteMarks,
  addSubjectTeacher,
  getAttendance,
  getMarks,
  getNotifications,
} = require('../controllers/facultyController.cjs');

// Apply Middleware to all Faculty Routes
router.use(protect); // Authenticated User Required
router.use(authorizeRoles('faculty')); // Only Faculty Role Access

// Faculty Dashboard
router.get('/data', getFacultyData);

// Get All Students
router.get('/students', getStudents);

// Upload Marks
router.post('/upload-marks', uploadMarks);

// Upload Attendance
router.post('/upload-attendance', uploadAttendance);

// Admit New Student
router.post('/admit-student', admitStudent);

// Delete Marks
router.delete('/delete-marks/:id', deleteMarks);

// Add Subject Teacher
router.post('/add-subject-teacher', addSubjectTeacher);

// Optional: Faculty viewing attendance, marks, notifications
router.get('/attendance', getAttendance);
router.get('/marks', getMarks);
router.get('/notifications', getNotifications);

module.exports = router;
