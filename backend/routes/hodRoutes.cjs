// backend/routes/hodRoutes.js

const express = require('express');
const router = express.Router();

// Middleware
const { protect, authorizeRoles } = require('../middleware/authMiddleware.cjs');

// Controllers
const {
  verifyHODFace,
  getAllStudents,
  getStudentById,
  getAllFaculties,
  getFacultyById,
  addFaculty,
  deleteFaculty
} = require('../controllers/hodController.cjs');

// Apply middleware to protect all routes for HOD role
router.use(protect);
router.use(authorizeRoles('HOD'));

// Face Verification
router.post('/verify-face', verifyHODFace);

// Faculty Management
router.post('/faculty', addFaculty);
router.delete('/faculty/:id', deleteFaculty);

// Get All Students
router.get('/students', getAllStudents);

// Get Single Student by ID
router.get('/student/:id', getStudentById);

// Get All Faculties
router.get('/faculties', getAllFaculties);

// Get Single Faculty by ID
router.get('/faculty/:id', getFacultyById);

module.exports = router;
