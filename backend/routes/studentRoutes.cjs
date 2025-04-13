// backend/routes/studentRoutes.js


const express = require('express');
const router = express.Router();
const { getAttendance, getMarks, getNotifications, getStudentData, getStudents } = require('../controllers/studentController.cjs');


// Define routes
router.get('/attendance', getAttendance);
router.get('/marks', getMarks);
router.get('/notifications', getNotifications);
router.get('/data', getStudentData);
router.get('/students', getStudents);

module.exports = router;

