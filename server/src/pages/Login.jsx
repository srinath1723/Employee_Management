import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('http://localhost:4005/api/login', { userName, password });
            // Assuming a successful login response includes a message
            alert(response.data.message); // Show success message
            
            // Redirect to the dashboard after successful login
            navigate('/dashboard');
        } catch (error) {
            // Handle errors (like invalid credentials)
            if (error.response) {
                setErrorMessage(error.response.data.message); // Set error message from server
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>UserName:</label>
                    <input
                        type="userName"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
