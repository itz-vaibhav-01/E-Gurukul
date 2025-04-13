// routes/facultyRoutes.js
const express = require('express');
const router = express.Router();
const { uploadAttendance, uploadMarks, deleteMarks } = require('../controllers/facultyController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/upload-attendance', authMiddleware, uploadAttendance);
router.post('/upload-marks', authMiddleware, uploadMarks);
router.delete('/delete-marks/:id', authMiddleware, deleteMarks);  // Delete Marks Route

module.exports = router;
