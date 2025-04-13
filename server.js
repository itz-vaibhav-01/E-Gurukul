const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./backend/config/db.cjs');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
const authRoutes = require('./backend/routes/authRoutes.cjs');
const studentRoutes = require('./backend/routes/studentRoutes.cjs');
const facultyRoutes = require('./backend/routes/facultyRoutes.cjs');
const hodRoutes = require('./backend/routes/hodRoutes.cjs');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/hod', hodRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





// Use process.env.MONGO_URI, process.env.JWT_SECRET in the rest of the server
