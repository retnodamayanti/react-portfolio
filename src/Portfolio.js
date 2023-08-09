import React from 'react';
import Project from './components/Project'; 
import projectInventoryImage from './images/project_inventory.jpg';
import techBlogImage from './images/online-blog.jpg';
import weatherDashImage from './images/weather-dashboard.jpg';
import quizImage from './images/coding_quiz.png';
import passwordImage from './images/generate-password.jpg';
import easyShopImage from './images/easy_shop.jpg'

// Import more project images as needed

const Portfolio = () => {
  const projects = [
    {
      title: 'Project Inventory',
      imageSrc: projectInventoryImage,
      liveLink: 'https://project-inventory-ff35c68cb7af.herokuapp.com/',
      repoLink: 'https://github.com/retnodamayanti/Project_Inventory',
    },
    {
      title: 'Tech Blog', 
      imageSrc: techBlogImage, 
      liveLink: 'https://maya-tech-blog-8a50da98b642.herokuapp.com/',
      repoLink: 'https://github.com/retnodamayanti/tech-blog',
    },
    {
      title: 'Weather Dashboard', 
      imageSrc: weatherDashImage, 
      liveLink: 'https://retnodamayanti.github.io/weather-dashboard/',
      repoLink: 'https://github.com/retnodamayanti/weather-dashboard',
    },
    {
      title: 'Coding Quiz',
      imageSrc: quizImage,
      liveLink: 'https://retnodamayanti.github.io/quiz_javascript/index.html',
      repoLink: 'https://github.com/retnodamayanti/quiz_javascript',
    },
    {
      title: 'Generate Password', 
      imageSrc: passwordImage, 
      liveLink: 'https://retnodamayanti.github.io/generate_password_javascript',
      repoLink: 'https://github.com/retnodamayanti/generate_password_javascript',
    },
    {
      title: 'Eazy Shopping', 
      imageSrc: easyShopImage, 
      liveLink: 'https://davidhccnguyen.github.io/EasierShopping',
      repoLink: 'https://github.com/DavidHCCNguyen/C07-EazyShopping',
    },
   
    
  ];

  return (
    <section className="portfolio container">
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-5">
            <Project
              title={project.title}
              imageSrc={project.imageSrc}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;





