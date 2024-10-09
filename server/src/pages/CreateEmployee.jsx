import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar'; // Import the Navbar
import './CreateEmployee.css';

const CreateEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState([]);
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('designation', designation);
        formData.append('gender', gender);
        formData.append('course', JSON.stringify(course));
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4005/api/employee/create', formData);
            setSuccessMessage(response.data.message);
            setErrorMessage('');
            setName('');
            setEmail('');
            setMobile('');
            setDesignation('');
            setGender('');
            setCourse([]);
            setImage(null);

            // Redirect to the employee list page after successful submission
            navigate('/employee-list'); // Adjust the path if needed
        } catch (error) {
            setErrorMessage(error.response.data.message);
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
            <h2>Create Employee</h2>
            <form onSubmit={handleSubmit} className="employee-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                    <label>Image Upload:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        accept="image/jpeg, image/png"
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
