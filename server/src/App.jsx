import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import EditEmployee from './pages/EditEmployee';
import Dashboard from './pages/Dashboard'; // Import Dashboard component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-employee" element={<CreateEmployee />} />
                <Route path="/edit-employee/:id" element={<EditEmployee />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="/employees" element={<EmployeeList />} />

            </Routes>
        </Router>
    );
}

export default App;
