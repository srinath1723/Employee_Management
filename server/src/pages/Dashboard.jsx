import React from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    return (
        <div>
            <Navbar /> 
            <h2 className="dashboard-heading">Dashboard</h2>
            
            <p className="dashboard-welcome">Welcome to the Admin panel</p>
        </div>
    );
};

export default Dashboard;
