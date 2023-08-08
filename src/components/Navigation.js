import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Import NavDropdown
import { Link } from 'react-router-dom';
import avatarImage from '../images/avatar.jpg';

const Navigation = () => {
  return (
    <Navbar id="sideNav" expand="lg" variant="dark" className="navbar-dark bg-primary fixed-top">
      <Navbar.Brand as={Link} to="/" className="navbar-brand js-scroll-trigger">
        <span className="d-block d-lg-none">Clarence Taylor</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatarImage} alt="..." />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" className="navbar-toggler" />
      <Navbar.Collapse id="navbarResponsive">
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/" className="nav-link js-scroll-trigger">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/portfolio" className="nav-link js-scroll-trigger">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link js-scroll-trigger">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/resume" className="nav-link js-scroll-trigger">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
