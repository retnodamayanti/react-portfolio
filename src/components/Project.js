import React from 'react';

const Project = ({ title, imageSrc, liveLink, repoLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;
