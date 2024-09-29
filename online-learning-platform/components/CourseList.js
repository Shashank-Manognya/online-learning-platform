import React from 'react';
import './CourseList.css'; // Import custom CSS
import course1 from '../assets/course1.png'; // Correct image import
import course2 from '../assets/course2.png'; // Correct image import
import course3 from '../assets/course3.jpg'; // Correct image import

const courses = [
  { id: 1, title: 'React for Beginners', instructor: 'John Doe', imageUrl: course1 }, // Use imported image
  { id: 2, title: 'Node.js Mastery', instructor: 'Jane Smith', imageUrl: course2 }, // Use imported image
  { id: 3, title: 'Full Stack Development', instructor: 'Mike Lee', imageUrl: course3 }, // Use imported image
];

const CourseList = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <div className="card course-card">
              <img src={course.imageUrl} className="card-img-top" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Instructor: {course.instructor}</p>
                <a href={`/courses/${course.id}`} className="btn btn-primary">
                  View Course
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
