import React from 'react';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'];

  return (
    <section className="resume py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="resume-links">
              <a
                href="/retno_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-fit-content d-block mb-3"
              >
                Download Resume
              </a>
              <div className="proficiencies">
                <h3>Proficiencies</h3>
                <ul className="list-unstyled">
                  {proficiencies.map((skill, index) => (
                    <li key={index} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
