import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // For accessing URL parameters and navigation
import Navbar from '../components/Navbar'; // Import the Navbar
import './CreateEmployee.css'; // You can reuse the same CSS file

const EditEmployee = () => {
    const { id } = useParams(); // Get the employee ID from the URL
    const navigate = useNavigate(); // For redirecting after update
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState([]);
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch employee details by ID on component mount
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/api/employee/${id}`);
                const employee = response.data;

                setName(employee.name);
                setEmail(employee.email);
                setMobile(employee.mobile);
                setDesignation(employee.designation);
                setGender(employee.gender);
                setCourse(JSON.parse(employee.course)); // Assuming course is stored as JSON string
            } catch (error) {
                setErrorMessage('Error fetching employee details');
            }
        };
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('designation', designation);
        formData.append('gender', gender);
        formData.append('course', JSON.stringify(course));
        if (image) {
            formData.append('image', image);
        }

        try {
            await axios.put(`http://localhost:4005/api/employee/update/${id}`, formData);
            setSuccessMessage('Employee updated successfully!');
            setErrorMessage('');
            // Redirect after successful update
             navigate('/employees');
        } catch (error) {
            setErrorMessage('Error updating employee');
            setSuccessMessage('');
        }
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setCourse((prev) =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

    return (
        <div className="create-employee-container">
            <Navbar /> {/* Include the Navbar */}
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mobile No:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Designation:</label>
                    <select
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    >
                        <option value="">Select</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div>
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === 'Male'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === 'Female'}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label>Course:</label>
                    <label>
                        <input
                            type="checkbox"
                            value="MCA"
                            checked={course.includes('MCA')}
                            onChange={handleCheckboxChange}
                        />
                        MCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="BCA"
                            checked={course.includes('BCA')}
                            onChange={handleCheckboxChange}
                        />
                        BCA
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="BSC"
                            checked={course.includes('BSC')}
                            onChange={handleCheckboxChange}
                        />
                        BSC
                    </label>
                </div>
                <div>
                    <label>Image Upload (optional):</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/jpeg, image/png"
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditEmployee;
