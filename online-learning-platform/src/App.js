import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Login from './components/Login';
import Register from './components/Register';
import ProgressTracker from './components/ProgressTracker'; // Import the Progress Tracker component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1 className="app-heading">Knowledge Hub</h1>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/progress-tracker">Progress Tracker</Link></li> {/* New Progress Tracker Link */}
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={
            <div className="home-container">
              <p>Welcome to the Knowledge Hub! Explore our courses to enhance your skills.</p>
              <CourseList />
            </div>
          } />

          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} /> {/* Add Progress Tracker Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
