import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';
import VideoPlayer from './VideoPlayer';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.jpg';

const courses = [
    {
        id: 1,
        title: 'React for Beginners',
        instructor: 'John Doe',
        imageUrl: course1,
        description: 'Learn React from scratch with this beginner-friendly course.',
        duration: '1 hour 20 mins',
        modules: ['Introduction to React', 'State Management', 'Component Lifecycle', 'Building Single Page Applications'],
        rating: 4.5,
        videoUrl: 'https://online-learning-platform.s3.ap-south-1.amazonaws.com/videos/course1.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCmFwLXNvdXRoLTEiRjBEAiAYiAcEdhr3xUrrKUgfGdbmeruGb41vmBZz3Ie0o33oWAIgeI9fF15TeduHiUwn54As042E5cgiphsUc4Iqap%2BHoiwq6AIIYRAAGgw4NjcyMTMyMTg1NDciDF7BIaWr%2FmK%2FKLBBHCrFAlmp4BR4%2FJckSZlHSrF5HGJExeHhaYPq86UlgIz%2FNZZj52T%2BC%2BEmHHiTKBPN71VZBXqqJmORpSATDitRrzz%2F5jMp7apIO7aad0knKWfLW5XadFFPyhOVFfZeSMfHhP5NNX%2Fziajr2eVh9O7GHi7Qj%2BOYwbeuQPdILpzJ3VmPwqNLKbA4SB6q%2BIFAkkJi%2FzFRZozSRn%2BA%2Fc78fr3I%2B8hpJ5NakAhgWYLmOGiQKlNvNXNgdMxzHkOO7eHqEWSTat%2BDDGnYAfqyTVuAemyGfpJYGEfBS0jHb7Di1SzVGqKAORWiTfBfoToKORxFw2vJbRvVPiM7c6hmUwRiBQowfB2Vaw7NsKjAiamTy1SZY7xUKq7D9I7ahXMnjoq27wFufELd%2B846tHo7nGCQCx8kurdou7kzsX2tYjvAwHheB05FtAn2eASA7ZEwt%2BPltwY6tAITXie6fIfC3oL2Sxzglf4IpPUpwg7U6BX1tmLCEbQjsb6mUL7F%2BtbgPXUB3Urv4Q8MMK%2F4m3e4xUqyTYM4c39btsItdkYsKIzQWRqUA3ksH3YHgfaaYX13RA%2B3SlhYhprKgkYgOL6QH5FJhd2PiS%2F0%2FmZyb%2ByGJfU8dvfx0HAjvpgjlmgjIWT1u0L2NqFND3IaqqAdJCTE6bC1MBvLOV4lFIVTnW9geyrrbAiOc4VWBS5UMvgXwyMq2GMYVIF1WW9xiTP0I3KpRl2pz3tui2cqfavrt2FSv%2BEjRNETmidKIZhEqZQ8%2BoQIa2t0BJzul22XIOhn75tPCla5rRE5eOLfwPZ%2BmJnUgix2Bp09D7dikoNcG8f2GsrszRC7E8oHR9nk2TglE1slODpk2YL8LvJvoN8RUA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T155142Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4T2PPSLZWP5BYMZD%2F20240929%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=623ec5a610b70706fc148364c11ddde1ddb5a5adc83881a1263e5c7e387d072d',  // Add video URL
    },
    {
        id: 2,
        title: 'Node.js Mastery',
        instructor: 'Jane Smith',
        imageUrl: course2,
        description: 'Become a Node.js expert by building real-world applications.',
        duration: '1 hour 20 mins',
        modules: ['Understanding Node.js', 'Express Framework', 'Building APIs', 'Deploying Node Apps'],
        rating: 4.8,
        videoUrl: 'https://online-learning-platform.s3.ap-south-1.amazonaws.com/videos/course2.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCmFwLXNvdXRoLTEiRjBEAiAYiAcEdhr3xUrrKUgfGdbmeruGb41vmBZz3Ie0o33oWAIgeI9fF15TeduHiUwn54As042E5cgiphsUc4Iqap%2BHoiwq6AIIYRAAGgw4NjcyMTMyMTg1NDciDF7BIaWr%2FmK%2FKLBBHCrFAlmp4BR4%2FJckSZlHSrF5HGJExeHhaYPq86UlgIz%2FNZZj52T%2BC%2BEmHHiTKBPN71VZBXqqJmORpSATDitRrzz%2F5jMp7apIO7aad0knKWfLW5XadFFPyhOVFfZeSMfHhP5NNX%2Fziajr2eVh9O7GHi7Qj%2BOYwbeuQPdILpzJ3VmPwqNLKbA4SB6q%2BIFAkkJi%2FzFRZozSRn%2BA%2Fc78fr3I%2B8hpJ5NakAhgWYLmOGiQKlNvNXNgdMxzHkOO7eHqEWSTat%2BDDGnYAfqyTVuAemyGfpJYGEfBS0jHb7Di1SzVGqKAORWiTfBfoToKORxFw2vJbRvVPiM7c6hmUwRiBQowfB2Vaw7NsKjAiamTy1SZY7xUKq7D9I7ahXMnjoq27wFufELd%2B846tHo7nGCQCx8kurdou7kzsX2tYjvAwHheB05FtAn2eASA7ZEwt%2BPltwY6tAITXie6fIfC3oL2Sxzglf4IpPUpwg7U6BX1tmLCEbQjsb6mUL7F%2BtbgPXUB3Urv4Q8MMK%2F4m3e4xUqyTYM4c39btsItdkYsKIzQWRqUA3ksH3YHgfaaYX13RA%2B3SlhYhprKgkYgOL6QH5FJhd2PiS%2F0%2FmZyb%2ByGJfU8dvfx0HAjvpgjlmgjIWT1u0L2NqFND3IaqqAdJCTE6bC1MBvLOV4lFIVTnW9geyrrbAiOc4VWBS5UMvgXwyMq2GMYVIF1WW9xiTP0I3KpRl2pz3tui2cqfavrt2FSv%2BEjRNETmidKIZhEqZQ8%2BoQIa2t0BJzul22XIOhn75tPCla5rRE5eOLfwPZ%2BmJnUgix2Bp09D7dikoNcG8f2GsrszRC7E8oHR9nk2TglE1slODpk2YL8LvJvoN8RUA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T155203Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4T2PPSLZWP5BYMZD%2F20240929%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=ce70a625a0e5b4bdef0f8b010f8e29055a3232724353bc1b55536fd04ea19358',  // Add video URL
    },
    {
        id: 3,
        title: 'Full Stack Development',
        instructor: 'Mike Lee',
        imageUrl: course3,
        description: 'Master both front-end and back-end development.',
        duration: '2 hour 40 mins',
        modules: ['HTML & CSS', 'JavaScript Fundamentals', 'React', 'Node.js & Express'],
        rating: 4.7,
        videoUrl: 'https://online-learning-platform.s3.ap-south-1.amazonaws.com/videos/course3.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCmFwLXNvdXRoLTEiRjBEAiAYiAcEdhr3xUrrKUgfGdbmeruGb41vmBZz3Ie0o33oWAIgeI9fF15TeduHiUwn54As042E5cgiphsUc4Iqap%2BHoiwq6AIIYRAAGgw4NjcyMTMyMTg1NDciDF7BIaWr%2FmK%2FKLBBHCrFAlmp4BR4%2FJckSZlHSrF5HGJExeHhaYPq86UlgIz%2FNZZj52T%2BC%2BEmHHiTKBPN71VZBXqqJmORpSATDitRrzz%2F5jMp7apIO7aad0knKWfLW5XadFFPyhOVFfZeSMfHhP5NNX%2Fziajr2eVh9O7GHi7Qj%2BOYwbeuQPdILpzJ3VmPwqNLKbA4SB6q%2BIFAkkJi%2FzFRZozSRn%2BA%2Fc78fr3I%2B8hpJ5NakAhgWYLmOGiQKlNvNXNgdMxzHkOO7eHqEWSTat%2BDDGnYAfqyTVuAemyGfpJYGEfBS0jHb7Di1SzVGqKAORWiTfBfoToKORxFw2vJbRvVPiM7c6hmUwRiBQowfB2Vaw7NsKjAiamTy1SZY7xUKq7D9I7ahXMnjoq27wFufELd%2B846tHo7nGCQCx8kurdou7kzsX2tYjvAwHheB05FtAn2eASA7ZEwt%2BPltwY6tAITXie6fIfC3oL2Sxzglf4IpPUpwg7U6BX1tmLCEbQjsb6mUL7F%2BtbgPXUB3Urv4Q8MMK%2F4m3e4xUqyTYM4c39btsItdkYsKIzQWRqUA3ksH3YHgfaaYX13RA%2B3SlhYhprKgkYgOL6QH5FJhd2PiS%2F0%2FmZyb%2ByGJfU8dvfx0HAjvpgjlmgjIWT1u0L2NqFND3IaqqAdJCTE6bC1MBvLOV4lFIVTnW9geyrrbAiOc4VWBS5UMvgXwyMq2GMYVIF1WW9xiTP0I3KpRl2pz3tui2cqfavrt2FSv%2BEjRNETmidKIZhEqZQ8%2BoQIa2t0BJzul22XIOhn75tPCla5rRE5eOLfwPZ%2BmJnUgix2Bp09D7dikoNcG8f2GsrszRC7E8oHR9nk2TglE1slODpk2YL8LvJvoN8RUA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T155221Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA4T2PPSLZWP5BYMZD%2F20240929%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=52b61b7b7a172419f3bc3d6f72233da5822441b6f8a6c8a17b2ce3b62d6f4e53',  // Add video URL
    },
];

const CourseDetails = () => {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));

    if (!course) return <div>Course not found</div>;

    const handleEnroll = () => {
        alert('Enrolled successfully!');
    };

    return (
        <div className="course-details">
            <h1>{course.title}</h1>
            <h3>Instructor: {course.instructor}</h3>
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            
            {/* Video Player */}
            <VideoPlayer videoUrl={course.videoUrl} />

            <h4>Modules:</h4>
            <ul>
                {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                ))}
            </ul>
            <button onClick={handleEnroll}>Enroll Now</button>
            <div className="course-rating">
                <span>Rating: {course.rating} / 5</span>
            </div>
            <div className="course-faq">
                <h4>Frequently Asked Questions:</h4>
                <p><strong>Q:</strong> Do I need prior experience in programming?</p>
                <p><strong>A:</strong> No, this course is beginner-friendly!</p>
            </div>
        </div>
    );
};

export default CourseDetails;
