import React from 'react';
import './ProgressTracker.css';

function ProgressTracker() {
  // Sample data, replace with actual progress data as needed
  const courses = [
    { title: 'React for Beginners', progress: 80 },
    { title: 'Node JS Mastery', progress: 50 },
    { title: 'Full Stack Web Development', progress: 30 },
  ];

  return (
    <div className="progress-tracker">
      <h2>Your Course Progress</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <span>{course.title}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span>{course.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressTracker;
