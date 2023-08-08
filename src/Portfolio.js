// src/Portfolio.js
import React from 'react';
import Project from './components/Project'; 

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: './images/project_inventory.jpg',
      liveLink: 'https://project-inventory-ff35c68cb7af.herokuapp.com/',
      repoLink: 'https://github.com/retnodamayanti/Project_Inventory',
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageSrc={project.imageSrc}
          liveLink={project.liveLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;
