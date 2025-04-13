const express = require('express');
const { verifyHODFace, getAllStudents, getAllFaculty } = require('../controllers/hodController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Face Verification Route
router.post('/verify-face', protect, authorize('HOD'), verifyHODFace);

// Get All Students
router.get('/students', protect, authorize('HOD'), getAllStudents);

// Get All Faculty
router.get('/faculty', protect, authorize('HOD'), getAllFaculty);



module.exports = router;
