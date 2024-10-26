const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../schema/Admin');

const router = express.Router();
const JWT_SECRET = 'hema123'; // You should store this in environment variables for security

const AdmissionEnquiry = require('../schema/applicationEnquirySchema');
const RegisteredApplication = require('../schema/applicationFormSchema');
// const Course = require('../schema/Course');
const UserAccount = require('../schema/User');

// Admin registration route
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Create a new admin
        const newAdmin = new Admin({ email, password });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully', data: newAdmin });
    } catch (error) {
        console.error('Error registering admin', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Admin login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const admin = await Admin.findOne({ email });
        if (!admin || admin.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ adminId: admin._id, email: admin.email }, JWT_SECRET, { expiresIn: '1h' });

        console.log("login sucess")
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in admin', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/fetchDashboardData', async (req, res) => {
    try {
        
        const admissionEnquiriesCount = await AdmissionEnquiry.countDocuments();
        const registeredApplicationsCount = await RegisteredApplication.countDocuments();
       
        const userAccountsCount = await UserAccount.countDocuments();

        res.status(200).json({
            admissionEnquiriesCount,
            registeredApplicationsCount,
            userAccountsCount,
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/fetchAllUserAccounts', async (req, res) => {
    try {
   
        const userAccounts = await UserAccount.find().sort({ createdAt: -1 }); 
        res.status(200).json({ userAccounts });
    } catch (error) {
        console.error('Error fetching user accounts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

router.get('/dashboard', authenticateJWT, (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin dashboard!', admin: req.user });
});


module.exports = router;
