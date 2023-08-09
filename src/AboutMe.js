import React, { useEffect } from 'react';
import avatarImage from './images/avatar.jpg';

const AboutMe = () => {
  useEffect(() => {
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        {/* <h1 className="mb-0">
          Retno <span className="text-primary">Damayanti</span>
        </h1>
        <div className="subheading mb-5">
          Walkerville, SA 5081 {' '}
          <a href="mailto:name@email.com">mayahere5@gmail.com</a>
        </div> */}
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatarImage} alt="avatar-image" style={{ width: '25%' }} />
        </span>
        <p className="lead mb-5">
        Hi there! I'm Retno, an aspiring Junior Web Developer. With a passion for coding and strong attention to detail, I thrive on crafting elegant solutions to complex challenges. Effective communication and collaborative teamwork are my driving forces, enabling me to contribute meaningfully to dynamic projects. Dedicated to continuous growth, I'm excited to make my mark in the ever-evolving field of web development. Let's connect and create together.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
