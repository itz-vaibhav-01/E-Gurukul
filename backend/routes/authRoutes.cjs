const express = require('express');
const router = express.Router();

const User = require('../models/UserModel.cjs');
const Attendance = require('../models/Attendance.cjs');
const Marks = require('../models/Marks.cjs');
const Notification = require('../models/Notification.cjs');
const { protect } = require('../middleware/authMiddleware.cjs');
const { authorizeRoles } = require('../middleware/roleMiddleware.cjs');

// @desc    Get student attendance
// @route   GET /api/student/attendance
// @access  Private (Student)
router.get('/attendance', protect, authorizeRoles('student'), async (req, res) => {
    try {
        const attendance = await Attendance.find({ student: req.user._id });
        res.status(200).json(attendance);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching attendance', error: err.message });
    }
});

// @desc    Get student marks
// @route   GET /api/student/marks
// @access  Private (Student)
router.get('/marks', protect, authorizeRoles('student'), async (req, res) => {
    try {
        const marks = await Marks.find({ student: req.user._id });
        res.status(200).json(marks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching marks', error: err.message });
    }
});

// @desc    Get student notifications
// @route   GET /api/student/notifications
// @access  Private (Student)
router.get('/notifications', protect, authorizeRoles('student'), async (req, res) => {
    try {
        const notifications = await Notification.find({ role: 'student' });
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching notifications', error: err.message });
    }
});

module.exports = router;
