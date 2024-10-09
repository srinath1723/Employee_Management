const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    course: { type: String, required: true },
    image: { type: String, required: false }, // Image path
}, {imageAddedAt: { type: Date, required: false  },
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
