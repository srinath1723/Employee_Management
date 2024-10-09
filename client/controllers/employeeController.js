const Employee = require('../models/Employee');


// Create Employee
exports.createEmployee = async (req, res) => {
    try {
        // Get image path
        const imagePath = req.file ? req.file.path : null; // Use req.file.path to get the image path

        const newEmployee = new Employee({
            ...req.body,
            image: imagePath // Save the image path to the database
        });
        await newEmployee.save();
        res.status(201).json({ success: true, data: newEmployee });
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating employee',
            error: error.message,
        });
    }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees' });
    }
};

// Get Single Employee
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Employee not found' });
    }
};


// Update Employee
exports.updateEmployee = async (req, res) => {
    try {
        // Prepare update data
        const updateData = {
            ...req.body,
            image: req.file ? req.file.path : undefined, // Only update the image if a new one is uploaded
            imageAddedAt: req.file ? new Date() : undefined // Set the added date if a new image is uploaded
        };

        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ success: true, data: updatedEmployee });
    } catch (error) {
        console.error('Error updating employee:', error); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Error updating employee', error: error.message });
    }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json({ message: 'Employee deleted' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'Error deleting employee', error: error.message });
    }
};


