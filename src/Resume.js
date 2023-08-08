import React from 'react';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'];

  return (
    <section className="resume">
      <div className="resume-links">
        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;
