import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import avatarImage from '../images/avatar.jpg';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('about');
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/portfolio') {
      setActiveLink('portfolio');
    } else if (pathname === '/contact') {
      setActiveLink('contact');
    } else if (pathname === '/resume') {
      setActiveLink('resume');
    } else {
      setActiveLink('about');
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar id="sideNav" expand="lg" variant="dark" className="navbar-dark bg-primary fixed-top">
      <Navbar.Brand as={Link} to="/" className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none">Retno Damayanti</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatarImage} alt="..." />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-toggler" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="navbar-nav">
          <Nav.Link
            as={Link}
            to="/react-portfolio"
            className={`nav-link js-scroll-trigger ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => setActiveLink('about')}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/portfolio"
            className={`nav-link js-scroll-trigger ${activeLink === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveLink('portfolio')}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className={`nav-link js-scroll-trigger ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveLink('contact')}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/resume"
            className={`nav-link js-scroll-trigger ${activeLink === 'resume' ? 'active' : ''}`}
            onClick={() => setActiveLink('resume')}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
