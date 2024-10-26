const express = new require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../schema/User');

const JWT_SECRET = 'hema123'; // You should store this in environment variables for security


router.post('/register' , async(req , res)=>{

    try {

        console.log("hello")
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ status : 0, message: 'User already exists' });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        console.log("successfully stored = " ,newUser )

        res.status(201).json({ status : 1, message: 'User registered successfully', data: newUser });
    } catch (error) {
        console.error('Error registering user', error);
        res.status(500).json({status : 0, message: 'Internal server error' });
    }

})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

      
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in user', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    
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

router.get('/protected', authenticateJWT, (req, res) => {
    res.status(200).json({ message: 'You have access to this protected route', user: req.user });
});


module.exports = router;