// Importing the express library
const express = require("express");
const cors = require('cors');
const employeeRoutes = require('./routes/employee');

// Creating an express application
const app = express();

// Define users as a constant array
const users = [
    { userName: 'srinathsp', password: '123456' },

];

app.use(cors());
app.use(express.json());

// Login Route
app.post('/api/login', (req, res) => {
    const { userName, password } = req.body;

    // Find user
    const user = users.find((u) => u.userName === userName && u.password === password);

    if (user) {
        // Authentication successful
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        // Authentication failed
        return res.status(401).json({ message: 'Invalid email or password' });
    }
});
app.use('/uploads', express.static('uploads'));

+
// Routes
app.use('/api/employee', employeeRoutes);

// Export the express app
module.exports = app;
