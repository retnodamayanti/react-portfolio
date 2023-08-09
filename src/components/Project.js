import React from 'react';

const Project = ({ title, imageSrc, liveLink, repoLink }) => {
    return (
      <div className="project">
        <img className="project-image" src={imageSrc} alt={title} />
        <div className="project-overlay">
          <div className="project-details">
            <h3>{title}</h3>
            <div className="project-links">
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="live-link">
                Live Demo
              </a>
              <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  
