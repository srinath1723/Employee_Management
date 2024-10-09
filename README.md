# Employee Management System

This is a Full-Stack Employee Management System that allows you to create, read, update, and delete (CRUD) employee data. It is built using **MERN stack** (MongoDB, Express, React, Node.js).

## Table of Contents
- [Employee Management System](#employee-management-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Frontend](#frontend-1)
    - [Running the Frontend](#running-the-frontend)
  - [Backend](#backend-1)
    - [Running the Backend](#running-the-backend)
  - [API Endpoints](#api-endpoints)
    - [Employee Endpoints](#employee-endpoints)
  - [Screenshots](#screenshots)
  - [](#)

---

## Features
- Add new employees with image upload and employee details.
- Edit existing employee details.
- View a list of all employees, with pagination and search features.
- Delete employees from the system.
- Employee image and details are saved in MongoDB with the timestamp of creation and updates.

---

## Technologies Used
### Frontend
- **React** - JavaScript library for building user interfaces.
- **Axios** - Promise-based HTTP client for the browser.
- **React Router** - Client-side routing.
- **CSS** - For styling components.

### Backend
- **Node.js** - JavaScript runtime for backend.
- **Express** - Web framework for Node.js.
- **Mongoose** - MongoDB object modeling for Node.js.
- **Multer** - Middleware for handling multipart/form-data, for image uploads.

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v14 or later)
- **MongoDB** (Either locally or a MongoDB Atlas instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url/employee-management-system.git
   cd employee-management-system
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start MongoDB:
   - If you’re running MongoDB locally, make sure your MongoDB server is running.
   - If using MongoDB Atlas, make sure to configure your `.env` file with the correct MongoDB URI.

---

## Frontend

The frontend is built using **React**.

### Running the Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Create a `.env` file:
   ```bash
   REACT_APP_BACKEND_URL=http://localhost:4005
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

---

## Backend

The backend is built using **Node.js**, **Express**, and **MongoDB**.

### Running the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Create a `.env` file for environment variables:
   ```bash
   touch .env
   ```

   Add the following lines to your `.env` file:
   ```bash
   PORT=4005
   MONGODB_URI="mongodb+srv://srinath:srinath@cluster0.vbjuor7.mongodb.net/Task"
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

4. The backend server will be running on `http://localhost:4005`.

---

## API Endpoints

### Employee Endpoints
- **GET /api/employee/** - Get all employees.
- **GET /api/employee/:id** - Get a single employee by ID.
- **POST /api/employee/create** - Create a new employee.
- **PUT /api/employee/:id** - Update an employee.
- **DELETE /api/employee/:id** - Delete an employee.

---

## Screenshots
Include relevant screenshots to demonstrate the application's UI and functionality.

1. **Employee List Page**:
   ![Employee List](image.png)
2. **Create Employee Page**:
   ![Create Employee](image-1.png)
---




