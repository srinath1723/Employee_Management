import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Optional: create a CSS file for styling

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session or token if applicable
        navigate('/');
    };

    const userName = "Srinathsp"; // Replace this with your actual email from context or state

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/dashboard">Home</Link>
                </li>
                <li>
                    <Link to="/employee-list">Employee List</Link>
                </li>
                <li>
                    <Link to="/create-employee">Create Employee</Link>
                </li>
                <li>
                    <span>{userName}</span>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
