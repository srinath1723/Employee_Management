const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const upload = require('../middleware/multer'); // Import multer middleware

// Create Employee
router.post('/create', upload.single('image'), employeeController.createEmployee); // 'image' corresponds to the field name in your form

// Other routes...
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/update/:id', upload.single('image'), employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
