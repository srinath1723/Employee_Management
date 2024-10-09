import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './EmployeeList.css'; // Add CSS styling if needed

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Fetch the employee list on component mount
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:4005/api/employee/');
                setEmployees(response.data);
            } catch (error) {
                setErrorMessage('Error fetching employee list');
            }
        };
        fetchEmployees();
    }, []);

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    // Handle the deletion of an employee
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4005/api/employee/${id}`);
            setEmployees(employees.filter((employee) => employee._id !== id)); // Remove the deleted employee from the list
        } catch (error) {
            setErrorMessage('Error deleting employee');
        }
    };

    // Format date to a readable format
    const formatDate = (date) => {
        if (!date) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return (
        <div className="employee-list-container">
            <Navbar /> {/* Include the Navbar */}
            <h2>Employee List</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <p>Total Employees: {employees.length}</p>
            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                <table className="employee-list-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Courses</th>
                            <th>Create Date</th> {/* Create Date header */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>
                                    {employee.image && (
                                        <img 
                                            src={`http://localhost:4005/${employee.image}`} // Assuming the correct image URL
                                            alt={employee.name} 
                                            style={{ width: '50px', height: '50px', borderRadius: '50%' }} // Adjust styles as needed
                                        />
                                    )}
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.mobile}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.course && JSON.parse(employee.course).join(', ')}</td>
                                <td>{formatDate(employee.createdAt)}</td> {/* Display create date */}
                                <td className="action-buttons">
                                    <button onClick={() => handleEdit(employee._id)}>Edit</button>
                                    <button className="delete" onClick={() => handleDelete(employee._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeeList;
