import React from 'react';
import './styles/App.scss';

const Resume = () => {
  return (
    <div>
        <h2>Resume</h2>
        <h3>Work Experience</h3>
        <ul>
            <li>[Job 1 Title], [Job 1 Company], [Job 1 Duration]</li>
            <li>[Job 2 Title], [Job 2 Company], [Job 2 Duration]</li>
            <li>[Job 3 Title], [Job 3 Company], [Job 3 Duration]</li>
        </ul>
        <h3>Education</h3>
        <ul>
            <li>[Degree 1], [Institution 1], [Year 1]</li>
            <li>[Degree 2], [Institution 2], [Year 2]</li>
            <li>[Degree 3], [Institution 3], [Year 3]</li>
        </ul>
    </div>
  )
};
export default Resume;
